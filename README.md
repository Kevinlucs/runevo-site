# Clone Runna — landing de referência

Implementação estática em HTML, CSS e JavaScript, estruturada para refletir os padrões Webflow observados na página de referência.

## Executar

Abra `index.html` em um navegador ou sirva a pasta com qualquer servidor HTTP estático.

## Arquivos

- `index.html`: shell semântico e componente `Header/Navbar`.
- `styles.css`: tokens de design, layout, responsividade e todas as seções da landing.
- `script.js`: menu mobile, dropdown de planos, fechamento por Escape, carrossel de coaches e feedback local do formulário.
- `assets/`: vetores públicos observados no site de referência.

## Validação

- Página local respondendo em `http://127.0.0.1:4173/`.
- Navegação, dropdown de planos, menu mobile, Escape e fechamento por backdrop validados por inspeção da árvore de acessibilidade.
- Seções adicionais implementadas: coaches, parceiros, artigos, newsletter e rodapé.
- Layouts desktop, tablet e mobile cobertos pelos breakpoints `991px`, `767px` e `479px`.
