import {
    obterCadastros,
    salvarCadastros
} from "./storage.js";

export function exibirCadastros() {
    const lista =
        document.getElementById("lista-cadastros");

    if (!lista) {
        return;
    }

    const cadastros = obterCadastros();

    if (cadastros.length === 0) {
        lista.innerHTML =
            "<p>Nenhum cadastro realizado até o momento.</p>";

        return;
    }

    lista.innerHTML = cadastros.map(cadastro => `
        <article class="cadastro-salvo">

            <h4>${cadastro.nome}</h4>

            <p>
                <strong>E-mail:</strong>
                ${cadastro.email}
            </p>

            <p>
                <strong>Telefone:</strong>
                ${cadastro.telefone}
            </p>

            <p>
                <strong>Participação:</strong>
                ${cadastro.participacao}
            </p>

            <p>
                <strong>Data do cadastro:</strong>
                ${cadastro.dataCadastro || "Cadastro anterior"}
            </p>

        </article>
    `).join("");
}

export function configurarFormulario() {
    const formulario =
        document.getElementById("form-cadastro");

    const nome =
        document.getElementById("nome");

    const erroNome =
        document.getElementById("erro-nome");

    const feedback =
        document.getElementById("feedback-formulario");

    nome.addEventListener("input", function () {
        const nomeDigitado = nome.value.trim();

        if (nomeDigitado.length === 0) {
            nome.style.borderColor = "orange";
            erroNome.textContent =
                "O nome é obrigatório.";
        }

        else if (nomeDigitado.length < 3) {
            nome.style.borderColor = "orange";
            erroNome.textContent =
                "O nome deve possuir pelo menos 3 caracteres.";
        }

        else {
            nome.style.borderColor = "green";
            erroNome.textContent = "";
        }
    });

    formulario.addEventListener(
        "submit",
        function (evento) {
            evento.preventDefault();

            if (!formulario.checkValidity()) {
                feedback.textContent =
                    "Verifique os campos obrigatórios antes de continuar.";

                formulario.reportValidity();

                return;
            }

            const dadosCadastro = {
                nome:
                    document.getElementById("nome")
                        .value.trim(),

                email:
                    document.getElementById("email")
                        .value.trim(),

                telefone:
                    document.getElementById("telefone")
                        .value.trim(),

                participacao:
                    document.getElementById("participacao")
                        .value,

                mensagem:
                    document.getElementById("mensagem")
                        .value.trim(),

                dataCadastro:
                    dayjs().format("DD/MM/YYYY HH:mm")
            };

            const cadastros = obterCadastros();

            cadastros.push(dadosCadastro);

            salvarCadastros(cadastros);

            feedback.textContent =
                "Cadastro salvo com sucesso!";

            formulario.reset();

            nome.style.borderColor = "";
            erroNome.textContent = "";

            exibirCadastros();
        }
    );
}