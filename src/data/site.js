export const assetPath = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export const links = {
  github: 'https://github.com/Meiamonee',
  linkedin: 'https://linkedin.com/in/pedrolsouza',
  email: 'mailto:pedrolsouzafaria@hotmail.com',
  phone: 'tel:+5535984726490',
};

export const navigation = [
  { number: '00', id: 'topo', label: 'Início' },
  { number: '01', id: 'sobre', label: 'Sobre' },
  { number: '02', id: 'competencias', label: 'Competências' },
  { number: '03', id: 'projetos', label: 'Projetos' },
  { number: '04', id: 'experiencia', label: 'Experiência' },
  { number: '05', id: 'contato', label: 'Contato' },
];

export const marquee = ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'WebSockets'];

export const education = [
  {
    title: 'Bacharelado em Engenharia de Computação',
    institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais',
    period: 'Conclusão prevista em 2027',
  },
  { title: 'Ensino Médio', institution: 'Escola Estadual Iracema Rodrigues', period: '2016 – 2018' },
];

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
];

export const skills = [
  {
    title: 'Front-end',
    items: [
      { name: 'React', icon: 'react.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'HTML', icon: 'html.svg' },
      { name: 'CSS', icon: 'css.svg' },
      { name: 'Tailwind CSS', icon: 'tailwind.svg' },
    ],
  },
  {
    title: 'Back-end & APIs',
    items: [
      { name: 'Java', icon: 'java.svg' },
      { name: 'Node.js', icon: 'node.svg' },
      { name: 'APIs REST', icon: 'rest.svg' },
    ],
  },
  {
    title: 'Dados',
    items: [
      { name: 'MongoDB', icon: 'mongo.svg' },
      { name: 'MySQL', icon: 'mysql.svg' },
      { name: 'PostgreSQL', icon: 'postgres.svg' },
    ],
  },
  {
    title: 'Arquitetura',
    items: [
      { name: 'Microsserviços', icon: 'microservices.svg' },
      { name: 'Comunicação em tempo real com WebSockets', icon: 'websockets.svg' },
    ],
  },
];

export const projects = [
  {
    number: '01', category: 'Projeto acadêmico', title: 'Agenda Compartilhada',
    description: 'Aplicação Full Stack multi-tenant com React, Node.js, PostgreSQL e Socket.IO. Implementa autenticação JWT, permissões por empresa, eventos, chat e notificações em tempo real.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'JWT'],
    href: 'https://github.com/Meiamonee/Agenda-Compartilhada',
  },
  {
    number: '02', category: 'Projeto Full Stack', title: 'Fortnite Shop',
    description: 'Aplicação Full Stack com React, Node.js, Express e MongoDB para catálogo de cosméticos. Inclui busca e filtros, autenticação, inventário, compras simuladas e integração com API externa.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    href: 'https://github.com/Meiamonee/Fortinite-Shop',
  },
  {
    number: '03', category: 'TCC', title: 'Comparador de Preços de Supermercados',
    description: 'Trabalho de conclusão de curso para coletar, centralizar e comparar preços entre supermercados. Usa React, Node.js, Express e MongoDB, com Selenium e Node-Cron para scraping automatizado e atualização periódica da base.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Selenium', 'Node-Cron'],
    href: 'https://github.com/Meiamonee',
  },
  {
    number: '04', category: 'E-commerce React', title: 'Power Project',
    description: 'E-commerce de componentes e produtos gamer construído com React e Vite. Organiza páginas com React Router e apresenta uma galeria alimentada por dados estruturados.',
    stack: ['React', 'Vite', 'React Router', 'JavaScript', 'CSS'],
    href: 'https://github.com/Meiamonee/Power-Project',
  },
  {
    number: '05', category: 'Aplicação Full Stack', title: 'Livraria',
    description: 'Sistema para cadastrar, listar, editar e excluir livros, autores e categorias. Envia notificações de promoções em tempo real usando WebSocket.',
    stack: ['Node.js', 'Express', 'JavaScript', 'WebSocket', 'HTML', 'CSS'],
    href: 'https://github.com/Meiamonee/Livraria',
  },
  {
    number: '06', category: 'Projeto Front-end', title: 'Projeto Hat',
    description: 'Projeto front-end inspirado em A Hat in Time, desenvolvido para praticar HTML, CSS e JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
    href: 'https://github.com/Meiamonee/Projeto-Hat',
  },
];

export const experience = [
  {
    period: 'jan. 2022 – dez. 2023', title: 'Projeto de Extensão', role: 'Bolsista',
    description: 'Capacitou estudantes em HTML, CSS e JavaScript por meio de projetos práticos, do planejamento à entrega final.',
  },
  {
    period: 'jan. 2022 – out. 2022', title: 'TI — Prefeitura Municipal de Machado', role: 'Estagiário',
    description: 'Atuou na manutenção de hardware e software no ambiente de tecnologia da informação da Prefeitura Municipal de Machado.',
  },
];
