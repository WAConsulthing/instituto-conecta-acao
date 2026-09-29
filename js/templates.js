import { projetos } from "./projetos.js";

function gerarProjetos() {
    return projetos.map(projeto => `
        <article>
            <h3>${projeto.titulo}</h3>

            <span class="badge ${projeto.classe}">
                ${projeto.status}
            </span>

            <p>${projeto.descricao}</p>
        </article>
    `).join("");
}

export const paginas = {

    inicio: `
        <section id="sobre">

            <h2>Quem Somos</h2>

            <img
                src="../imagens/acao-social-conecta.png"
                alt="Voluntários do Instituto Conecta Ação realizando a entrega de alimentos durante uma ação social"
            >

            <p>
                O Instituto Conecta Ação é uma organização sem fins lucrativos
                dedicada ao desenvolvimento de projetos sociais e ao apoio de
                pessoas em situação de vulnerabilidade. Nossa missão é conectar
                pessoas, recursos e oportunidades para promover transformação
                social e contribuir para uma sociedade mais inclusiva e solidária.
            </p>

            <h2>Nossa Atuação</h2>

            <p>
                Desenvolvemos iniciativas nas áreas de educação, inclusão social,
                apoio comunitário e voluntariado, buscando ampliar oportunidades
                e melhorar a qualidade de vida das comunidades atendidas.
            </p>

        </section>
    `,

    projetos: `
        <section>
            <h2>Projetos em Destaque</h2>

            <div class="lista-projetos">
                ${gerarProjetos()}
            </div>
        </section>
    `,

    cadastro: `
        <section class="area-cadastro">

            <h2>Faça parte desta transformação</h2>

            <p>
                Preencha seus dados e escolha como deseja contribuir
                com o Instituto Conecta Ação.
            </p>

            <form id="form-cadastro" class="formulario-cadastro">

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        minlength="3"
                        placeholder="Digite seu nome completo"
                        required
                    >

                    <small id="erro-nome"></small>

                    <label for="email">E-mail</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nome@exemplo.com"
                        required
                    >

                    <label for="telefone">Telefone</label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(12) 99999-9999"
                        title="Digite o telefone no formato (00) 00000-0000"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Como deseja participar?</legend>

                    <label for="participacao">
                        Forma de participação
                    </label>

                    <select
                        id="participacao"
                        name="participacao"
                        required
                    >
                        <option value="">
                            Selecione uma opção
                        </option>

                        <option value="voluntario">
                            Trabalho voluntário
                        </option>

                        <option value="doador">
                            Realizar doação
                        </option>
                    </select>

                    <label for="mensagem">Mensagem</label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        placeholder="Conte como gostaria de contribuir"
                    ></textarea>
                </fieldset>

                <button type="submit" class="botao">
                    Enviar cadastro
                </button>

                <p id="feedback-formulario"></p>

            </form>

            <section id="historico-cadastros">
                <h3>Cadastros realizados</h3>
                <div id="lista-cadastros"></div>
            </section>

        </section>
    `
};