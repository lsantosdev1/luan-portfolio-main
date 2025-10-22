import { link } from 'fs';
import React from 'react';

// Navigation Links
export const NAV_LINKS = [
  { id: 'inicio', title: 'Início' },
  { id: 'sobre', title: 'Sobre' },
  { id: 'servicos', title: 'Serviços' },
  { id: 'especialidades', title: 'Especialidades' },
  { id: 'projetos', title: 'Projetos' },
  { id: 'contato', title: 'Contato' },
];

// Services
export const SERVICES = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Desenvolvimento Web',
    description: 'Criação de websites e aplicações web completas, desde o design inicial até a implementação final, com foco em performance e usabilidade.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'Interfaces Responsivas',
    description: 'Construção de interfaces de usuário que se adaptam perfeitamente a qualquer dispositivo, seja desktop, tablet ou mobile.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21.75l-3.75-1.5L12 18l3.75 2.25L12 21.75zM12 12.75l-3.75-1.5L12 9l3.75 2.25L12 12.75z" /></svg>,
    title: 'Componentes Reutilizáveis',
    description: 'Desenvolvimento de componentes robustos e reutilizáveis em React.js para otimizar o fluxo de trabalho e manter a consistência do código.',
  },
];

// Skills with SVG Icons
export const SKILLS = [
  { name: 'React', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>React</title><path d="M12.001 2.002c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.002c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.32-6.023c.335-.63.13-1.42-.48-1.83l-2.09-1.4c-.61-.41-1.41-.21-1.82.4l-.88 1.32c-.15.22-.4.3-.61.19l-1.32-.88c-.21-.11-.3-.36-.19-.57l1.32-.88c.61-.41.81-1.21.4-1.82l-1.4-2.09c-.41-.61-1.2-.81-1.82-.4l-2.09 1.4c-.61.41-.81 1.2-.4 1.83l.88 1.32c.11.21.02.46-.19.57l-.88 1.32c-.41.61-.21 1.41.4 1.82l2.09 1.4c.61.41 1.41.21 1.82-.4l.88-1.32c.15-.22.4-.3.61-.19l1.32.88c.21.11.3.36.19.57l-1.32.88c-.61.41-.81 1.21-.4 1.82l1.4 2.09c.41.61 1.2.81 1.82.4l2.09-1.4c.61-.41.81-1.2.4-1.82l-.88-1.32c-.11-.21-.02-.46.19-.57l.88-1.32c.39-.62.19-1.42-.42-1.83z"/></svg> },
  { name: 'JavaScript', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.472 1.35-1.532 2.62-2.89 3.432-1.356.81-2.89.984-4.242.984-1.63 0-3.056-.42-4.242-1.236-1.188-.816-2.028-1.944-2.5-3.432-.47-1.488-.558-2.976-.558-4.284 0-1.308.088-2.796.558-4.284.47-1.488 1.312-2.616 2.5-3.432 1.186-.816 2.612-1.236 4.242-1.236 1.352 0 2.884.174 4.242.984 1.356.812 2.418 2.082 2.89 3.432.472 1.488.648 2.976.648 4.284.002 1.308-.174 2.796-.646 4.284zM12.01 1.392c-5.244 0-6.336 2.028-6.336 5.4 0 2.484.744 4.104 2.412 5.124 1.668 1.02 3.336.984 4.968-.132.816-.504 1.356-1.188 1.932-2.304.576-1.116.816-2.136.816-3.024 0-2.04-.624-3.636-2.064-4.5-1.44-.864-3.456-.864-4.752 0zm0 15.684c-1.332 0-2.484-.42-3.456-1.236-.972-.816-1.5-1.92-1.8-3.324h6.72c-.264 2.412-1.62 3.816-3.464 4.56z"/></svg> },
  { name: 'TypeScript', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>TypeScript</title><path d="M1.5 0 h21 v21 h-1.5 v-19.5 h-19.5z M4.5 3 h16.5 v16.5 h-16.5z m3.084 3.325 v1.46h3.45v9.4h2.25v-9.4h3.45v-1.46z m-1.65 4.575c-.21.21-.45.39-.72.54s-.57.27-.9.36c-.33.09-.69.135-1.08.135-.51 0-.96-.09-1.35-.27s-.72-.45-.99-.81c-.27-.36-.45-.81-.54-1.35-.09-.54-.135-1.17-.135-1.89 0-.72.045-1.35.135-1.89.09-.54.27-.99.54-1.35.27-.36.6-.63.99-.81s.84-.27 1.35-.27c.39 0 .75.045 1.08.135.33.09.63.21.9.36s.51.33.72.54.33.45.45.72.18.585.225.99h-2.295c-.045-.27-.135-.495-.27-.675s-.33-.315-.54-.405c-.21-.09-.45-.135-.72-.135-.39 0-.72.09-.99.27-.27.18-.495.45-.675.81-.18.36-.27.81-.27 1.35s.09.99.27 1.35c.18.36.405.63.675.81.27.18.6.27.99.27.27 0 .51-.045.72-.135.21-.09.39-.225.54-.405s.225-.39.27-.63h2.295c-.045.405-.135.75-.27 1.035z"/></svg> },
  { name: 'Material UI', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>Material-UI</title><path d="M0 2.475v10.39l3 1.733V7.67l6 3.464 6-3.464v3.464l-6 3.464-3-1.732v3.464l3 1.732 6-3.464 6 3.464V4.208l-3-1.733v6.928L9 12.87l-6-3.464L0 7.672V2.475zm15 10.39l3 1.732v3.464l-3-1.732zm-12 0l-3 1.732v3.464l3-1.732z"/></svg> },
  { name: 'HTML5', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.42-.003.465 5.34h12.441l-.25 2.813-3.213.922-2.93-.914-.184-2.215h-2.61l.29 3.855L12 17.25l4.922-1.447.465-5.053H8.531z"/></svg> },
  { name: 'CSS3', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.23-2.622H5.4l.465 5.34h12.441l-.25 2.813-3.213.922-2.93-.914-.184-2.215h-2.61l.29 3.855L12 17.25l4.922-1.447.465-5.053H8.531z"/></svg> },
  { name: 'Backend', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg> },
  { name: 'MySQL', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>MySQL</title><path d="M20.422 17.337c-1.088-.03-1.932.081-2.64.379c-.203.082-.53.082-.557.338c.11.108.122.284.218.433c.163.27.449.635.707.824l.87.622c.531.325 1.13.514 1.647.838c.299.19.598.433.898.636c.152.108.244.284.435.352v-.041c-.095-.122-.123-.297-.217-.433l-.409-.392a6.4 6.4 0 0 0-1.415-1.365c-.435-.298-1.387-.703-1.564-1.203l-.027-.03c.299-.03.653-.136.939-.217c.463-.121.884-.095 1.36-.216l.653-.19v-.12c-.245-.244-.422-.569-.68-.798a18 18 0 0 0-2.245-1.663c-.422-.27-.966-.447-1.415-.676c-.164-.081-.435-.122-.53-.257c-.246-.297-.381-.69-.558-1.041l-1.116-2.353c-.245-.527-.395-1.054-.694-1.54c-1.4-2.3-2.925-3.692-5.265-5.058c-.503-.284-1.101-.406-1.738-.554l-1.02-.055c-.218-.094-.436-.351-.626-.473c-.775-.487-2.775-1.541-3.347-.151c-.368.878.544 1.743.854 2.19c.231.31.53.662.694 1.014c.091.23.122.473.217.716c.218.595.422 1.258.708 1.812c.152.284.312.582.503.839c.109.151.3.216.34.46c-.19.27-.204.675-.313 1.014c-.49 1.528-.3 3.42.395 4.545c.218.338.731 1.082 1.428.798c.613-.244.476-1.014.653-1.69c.041-.162.014-.27.095-.379v.03l.558 1.123c.422.662 1.157 1.352 1.769 1.812c.326.243.584.662.992.81v-.04h-.026c-.082-.121-.205-.176-.314-.27a6.6 6.6 0 0 1-.707-.812a17.4 17.4 0 0 1-1.523-2.46c-.218-.42-.409-.879-.585-1.298c-.083-.162-.083-.406-.218-.487c-.205.297-.503.555-.654.92c-.258.58-.285 1.297-.38 2.041c-.055.014-.03 0-.055.03c-.435-.107-.585-.554-.748-.932c-.408-.96-.476-2.501-.123-3.61c.096-.284.504-1.177.341-1.447c-.082-.257-.354-.405-.504-.608a5.5 5.5 0 0 1-.49-.865c-.325-.758-.489-1.596-.843-2.353c-.163-.352-.449-.717-.68-1.041c-.259-.365-.544-.622-.748-1.055c-.068-.151-.163-.392-.054-.554c.026-.108.081-.152.19-.176c.176-.151.68.04.857.121c.503.203.925.392 1.347.676c.19.135.394.392.64.46h.285c.436.095.925.03 1.333.152c.72.23 1.374.567 1.96.933a12 12 0 0 1 4.244 4.624c.163.311.23.595.38.92c.287.662.64 1.338.926 1.987c.286.636.558 1.285.966 1.812c.204.284 1.02.433 1.387.582c.272.12.694.23.94.378c.461.284.924.609 1.359.92c.217.162.898.5.939.77zM6.548 5.588a2.2 2.2 0 0 0-.557.068v.03h.027c.109.216.3.365.435.555l.313.649l.027-.03c.19-.136.286-.352.286-.676c-.082-.095-.095-.19-.163-.284c-.082-.135-.259-.203-.368-.311" clip-rule="evenodd"/></svg>},
    
  
];

// Projects
export const PROJECTS = [
  {
    image: 'https://i.imgur.com/XqDIzVh.png' ,
    title: 'Calculadora do Flamengo',
    description: 'Uma calculadora web totalmente funcional com um design temático inspirado nas cores e na identidade visual do Flamengo. Desenvolvido com HTML, CSS e JavaScript puro, e usuário interativa, responsiva e focada na experiência do usuário.',
    tags: ['Html', 'Css', 'Javascript'],
    link: 'https://calculadora-ashy-ten.vercel.app/'
    
  },
  {
    image: 'https://imgur.com/St2bQVd.png',
    title: 'App De Notas',
    description: 'Uma aplicação Full-Stack completa para gerenciamento de notas, permitindo ao usuário Criar, Ler, Atualizar e Deletar (CRUD) suas anotações de forma persistente. A arquitetura utiliza React com TypeScript no frontend para uma interface moderna e tipada, e um backend robusto com Node.js e Express, que serve uma API RESTful. Os dados são armazenados em um banco de dados PostgreSQL gerenciado pelo Supabase.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Supabase'],
    link: 'https://meu-app-de-notas.vercel.app/'
  },
  {
    image: 'https://imgur.com/IjPutl4.png',
    title: 'Dev-Finder',
    description: 'Uma ferramenta de busca que se integra em tempo real com a API pública do GitHub para fornecer um resumo visual de perfis de desenvolvedores. A aplicação foi desenvolvida utilizando um stack moderno com React, TypeScript e Tailwind CSS, com foco em uma arquitetura de componentes limpa e uma experiência de usuário fluida, gerenciando estados de carregamento e erro durante as requisições assíncronas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API REST', 'Vite'],
    link: 'https://dev-finder-rosy.vercel.app/'
  },
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/luanjob',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luan-santos-8092b721a/',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
  },
    {
    name: 'WhatsApp',
    url: 'https://wa.me/5521993884424',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.204-1.634a11.86 11.86 0 005.79 1.502h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  },
  {
    name: 'Email',
    url: 'https://mail.google.com/mail/u/1/#inbox',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
];