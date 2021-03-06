export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1']
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#3b5bfd'],
          user: 'https://avatars0.githubusercontent.com/u/20547884?v=4'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1']
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
        }
      ]
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: ['#70cc00'],
          user: 'https://avatars0.githubusercontent.com/u/20547884?v=4'
        }
      ]
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://randomuser.me/api/portraits/women/48.jpg'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://randomuser.me/api/portraits/men/15.jpg'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: ['#ff4e4e'],
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: ['#3b5bfd'],
          user: 'https://avatars0.githubusercontent.com/u/20547884?v=4'
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
          user: 'https://randomuser.me/api/portraits/women/71.jpg'
        }
      ]
    },
  ];
}
