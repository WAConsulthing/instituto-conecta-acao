import { paginas } from "./templates.js";

import {
    configurarFormulario,
    exibirCadastros
} from "./formulario.js";

const app = document.getElementById("app");

const botaoContraste =
    document.getElementById("botao-contraste");

const CHAVE_CONTRASTE =
    "altoContrasteConectaAcao";

function atualizarPaginaAtual(pagina) {
    document
        .querySelectorAll("[data-page]")
        .forEach(link => {
            if (link.dataset.page === pagina) {
                link.setAttribute(
                    "aria-current",
                    "page"
                );
            } else {
                link.removeAttribute(
                    "aria-current"
                );
            }
        });
}

function renderizarPagina(
    pagina,
    moverFoco = false
) {
    const paginaValida =
        paginas[pagina] ? pagina : "inicio";

    app.innerHTML =
        paginas[paginaValida];

    atualizarPaginaAtual(
        paginaValida
    );

    if (paginaValida === "cadastro") {
        configurarFormulario();
        exibirCadastros();
    }

    if (moverFoco) {
        app.focus();
    }
}

function aplicarAltoContraste(ativado) {
    document.body.classList.toggle(
        "alto-contraste",
        ativado
    );

    botaoContraste.setAttribute(
        "aria-pressed",
        String(ativado)
    );

    botaoContraste.textContent =
        ativado
            ? "Contraste padrão"
            : "Alto contraste";
}

function carregarPreferenciaContraste() {
    const contrasteSalvo =
        localStorage.getItem(
            CHAVE_CONTRASTE
        );

    const ativado =
        contrasteSalvo === "true";

    aplicarAltoContraste(
        ativado
    );
}

botaoContraste.addEventListener(
    "click",
    function () {
        const estaAtivado =
            document.body.classList.contains(
                "alto-contraste"
            );

        const novoEstado =
            !estaAtivado;

        aplicarAltoContraste(
            novoEstado
        );

        localStorage.setItem(
            CHAVE_CONTRASTE,
            String(novoEstado)
        );
    }
);

document
    .querySelectorAll("[data-page]")
    .forEach(link => {
        link.addEventListener(
            "click",
            function (evento) {
                evento.preventDefault();

                const pagina =
                    this.dataset.page;

                renderizarPagina(
                    pagina,
                    true
                );
            }
        );
    });

carregarPreferenciaContraste();

renderizarPagina("inicio");