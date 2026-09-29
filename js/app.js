import { paginas } from "./templates.js";

import {
    configurarFormulario,
    exibirCadastros
} from "./formulario.js";

const app = document.getElementById("app");

function atualizarPaginaAtual(pagina) {
    document
        .querySelectorAll("[data-page]")
        .forEach(link => {
            if (link.dataset.page === pagina) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
}

function renderizarPagina(pagina, moverFoco = false) {
    const paginaValida =
        paginas[pagina] ? pagina : "inicio";

    app.innerHTML = paginas[paginaValida];

    atualizarPaginaAtual(paginaValida);

    if (paginaValida === "cadastro") {
        configurarFormulario();
        exibirCadastros();
    }

    if (moverFoco) {
        app.focus();
    }
}

document
    .querySelectorAll("[data-page]")
    .forEach(link => {
        link.addEventListener(
            "click",
            function (evento) {
                evento.preventDefault();

                const pagina =
                    this.dataset.page;

                renderizarPagina(pagina, true);
            }
        );
    });

renderizarPagina("inicio");