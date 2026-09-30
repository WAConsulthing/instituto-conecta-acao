# Instituto Conecta Ação

Projeto web desenvolvido como parte das Experiências Práticas da disciplina de Desenvolvimento Front-End.

A aplicação apresenta o Instituto Conecta Ação, seus projetos sociais e uma área de cadastro para pessoas interessadas em participar como voluntárias ou doadoras.

## Funcionalidades

- Navegação no formato Single Page Application (SPA);
- Renderização dinâmica de conteúdo com JavaScript;
- Manipulação do DOM;
- Controle de eventos de interação;
- Validação dinâmica de formulário;
- Armazenamento de cadastros no localStorage;
- Exibição do histórico de cadastros;
- Registro de data e hora utilizando Day.js;
- Organização do JavaScript utilizando ES6 Modules.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- ES6 Modules;
- localStorage;
- JSON;
- Day.js;
- Git e GitHub;
- Visual Studio Code;
- Live Server.

## Estrutura do projeto

Setembro_Projeto_ONG/
- css/
  - style.css
- html/
  - index.html
  - projetos.html
  - cadastro.html
- imagens/
  - acao-social-conecta.png
  - acao-social-conecta.webp
- js/
  - app.js
  - formulario.js
  - projetos.js
  - storage.js
  - templates.js
- README.md

## Organização do JavaScript

O projeto utiliza módulos ES6 para separar as responsabilidades da aplicação.

- `app.js`: inicialização da SPA, navegação e renderização das páginas;
- `templates.js`: templates utilizados na geração dinâmica da interface;
- `projetos.js`: dados dos projetos sociais apresentados na aplicação;
- `formulario.js`: eventos, validações e interação do formulário;
- `storage.js`: leitura e gravação dos dados no localStorage.

## Pré-requisitos

Para executar o projeto localmente são necessários:

- Navegador web atualizado;
- Visual Studio Code ou editor equivalente;
- Git instalado para controle de versões;
- Extensão Live Server no Visual Studio Code;
- Conexão com a internet para carregamento da biblioteca Day.js via CDN.

## Instalação e execução local

1. Clonar o repositório:

`git clone https://github.com/WAConsulthing/instituto-conecta-acao.git`

2. Abrir a pasta do projeto no Visual Studio Code.

3. Confirmar que a extensão Live Server está instalada.

4. Abrir o arquivo `html/index.html`.

5. Executar a opção `Open with Live Server`.

6. A aplicação será aberta no navegador em um endereço local fornecido pelo Live Server.

O projeto utiliza HTML, CSS e JavaScript puro e não possui dependências instaladas por gerenciadores de pacotes. O Day.js é carregado externamente por CDN.

## Build e testes

O projeto não utiliza ferramenta de build ou processo de compilação. Os arquivos HTML, CSS e JavaScript são executados diretamente pelo navegador.

Os testes são realizados manualmente no navegador e com as ferramentas de desenvolvimento, incluindo:

- verificação da navegação da SPA;
- validação dos formulários;
- persistência de dados no localStorage;
- carregamento dos módulos JavaScript;
- inspeção do Console para identificação de erros;
- inspeção da aba Network para problemas de carregamento.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões e adota uma estrutura baseada em GitFlow:

- `main`: versão estável da aplicação;
- `develop`: integração e desenvolvimento contínuo;
- `feature/*`: desenvolvimento isolado de novas funcionalidades;
- `hotfix/*`: destinada a correções urgentes quando necessárias.

As mensagens seguem o padrão Conventional Commits, utilizando prefixos como:

- `feat`: inclusão de funcionalidades;
- `fix`: correção de falhas;
- `docs`: alterações de documentação.

As funcionalidades desenvolvidas em branches secundárias são submetidas a Pull Requests antes da integração às branches principais.

O planejamento das entregas utiliza Issues e Milestones no GitHub para permitir rastreabilidade das tarefas e versões.

## Autor

Projeto acadêmico desenvolvido por Ayanna Galvão.