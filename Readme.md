# Extensão - SOS Crawler

## Contexto

- HCaptcha hidden permissive

Site alvo:
- https://cnetmobile.estaleiro.serpro.gov.br/comprasnet-web/public/compras
- 
Baseado em :
- https://github.com/Aryan1718/AUTOFILL-EXTENSION


PopUp
---------------------------
O que aparece ao se clicar no botão da extensão.
Deve estar o html no manifesto em action.default_popup.

Esse html deve ter:
- a tag script para popup.js
- um botão com id definido, onde será adicionado um listener onclick que chamará [chrome.tabs.sendMessage] para a aba ativa.

Quem responderá a essa mensagem? É o content script.

Content Script
---------------------------

[Scripts de conteúdo] são arquivos executados no contexto de páginas da Web. Com a função Documento Modelo de objeto (DOM), eles podem ler detalhes das páginas da Web que o navegador visita, fazer alterações feitas neles e **passar informações para a extensão principal**.

Os scripts de conteúdo podem acessar as seguintes APIs de extensão diretamente:
1. dom
2. i18n
3. storage
4. runtime.connect()
5. runtime.getManifest()
6. runtime.getURL()
7. runtime.id
8. runtime.onConnect
9. runtime.onMessage
10. runtime.sendMessage()


Os scripts de conteúdo não podem acessar outras APIs diretamente. Mas eles podem acessá-las indiretamente, trocando mensagens com outras partes da sua extensão.

Você também pode acessar outros arquivos em sua extensão a partir de um script de conteúdo, usando APIs como fetch(). Para fazer isso, é necessário declará-las como recursos acessíveis pela Web. Isso também expõe os recursos a qualquer scripts próprios ou de terceiros em execução no mesmo site.

Os scripts de conteúdo vivem em um mundo isolado, permitindo que um script de conteúdo faça alterações em seu JavaScript sem conflito com a página ou outras extensões scripts de conteúdo.

> Termo-chave:um mundo isolado é um ambiente de execução particular que não pode ser acessado pela página ou por outros extensões. Uma consequência prática desse isolamento é que as variáveis JavaScript na classe os scripts de conteúdo não ficam visíveis para a página de host ou para outras extensões scripts de conteúdo. Conceito foi originalmente lançado com o lançamento inicial do Chrome, que isola as guias do navegador.

>Observação:não apenas cada extensão é executada em um mundo isolado, mas os scripts de conteúdo e a página da Web são. também. Isso significa que nenhuma dessas opções (página da Web, scripts de conteúdo e extensões em execução) pode acessar o contexto e as variáveis dos outros.

# Injetar Scripts de Conteúdo

Os scripts de conteúdo podem ser [declarados estaticamente], [declarados de forma dinâmica] ou [injetado de forma programática].