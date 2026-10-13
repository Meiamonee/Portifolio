# Meu Portfólio

Portfólio em React e Vite, com layouts próprios para celular, tablet e desktop. A página continua sendo uma experiência de uma só rota, com navegação por âncoras.

## Começar

Requer Node.js compatível com Vite 8. Na pasta do projeto:

```bash
npm install
npm run dev
```

O terminal mostrará o endereço do servidor de desenvolvimento. Para conferir a versão final:

```bash
npm run build
npm run preview
```

`node preview.mjs` também serve a pasta `dist` em `http://127.0.0.1:4173`. Depois de cada alteração, rode `npm run build` antes de usar esse servidor. A versão React precisa ser acessada por HTTP; abrir `index.html` diretamente pelo explorador de arquivos não inicia os módulos corretamente.

## Organização

- `index.html`: metadados e ponto de montagem do React.
- `src/App.jsx`: composição da página.
- `src/components/`: abertura, navegação e seções do portfólio.
- `src/data/site.js`: textos, links, projetos, competências e demais dados editáveis.
- `src/hooks/`: seção ativa e efeitos de desempenho/animação.
- `src/styles/style.css`: identidade visual e base do desktop.
- `src/styles/layouts.css`: composições de tablet e celular.
- `src/assets/spiral.html`: arte vetorial original da espiral, inserida como SVG local.
- `public/assets/`: vídeo de abertura, fotos, fontes e ícones locais.
- `dist/`: resultado gerado por `npm run build`; não editar manualmente.
- `scripts/prepare_intro.py`: conversão reprodutível do vídeo original.

## Interações

As larguras são medidas em pixels CSS: celular até 767px, tablet de 768 a 1023px e desktop a partir de 1024px. O conteúdo é único, sem páginas HTML separadas por dispositivo.

## Créditos dos ícones

Logos das tecnologias: [Devicon](https://github.com/devicons/devicon) v2.17.0 (MIT). Ícones de REST, microsserviços e WebSockets: [Tabler Icons](https://github.com/tabler/tabler-icons) v3.49.0 (MIT). Os SVGs estão em `public/assets/tech-icons/`.
