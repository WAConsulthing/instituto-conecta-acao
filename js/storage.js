const CHAVE_STORAGE = "cadastrosConectaAcao";

export function obterCadastros() {
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return [];
}

export function salvarCadastros(cadastros) {
    localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(cadastros)
    );
}