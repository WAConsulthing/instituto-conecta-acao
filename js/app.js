import { paginas } from "./templates.js";

import {
    configurarFormulario,
    exibirCadastros
} from "./formulario.js";

const app = document.getElementById("app");

function renderizarPagina(pagina) {
    app.innerHTML =
        paginas[pagina] || paginas.inicio;

    if (pagina === "cadastro") {
        configurarFormulario();
        exibirCadastros();
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

                renderizarPagina(pagina);
            }
        );

    });

renderizarPagina("inicio");