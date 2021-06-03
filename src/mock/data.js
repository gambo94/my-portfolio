import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Federico',
  subtitle: "I'm a Fullstack Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'myprofile.jpg',
  paragraphOne:
    'My name is Federico and I am 27 yo. I am from Fano, Italy and I have been living in Barcelona for 6 years. I am fluent in Italian, English, Spanish, advanced in Catalan and conversational in French.',
  paragraphTwo:
    'After completing a Master’s degree in Translation Technology at the Universidad Autònoma de Barcelona and working as a Project Manager, I have decided to take a deep dive into the world of coding myself.',
  paragraphThree: 'I love languages, travelling, videogames and mangas.',
  resume: 'https://www.dropbox.com/s/jfp4i4pqggneh1j/Federico%20Gambini_EN.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Face detection app',
    info: 'A web app that detects a face of a given picture. Built with React, NodeJS, mySQL and deployed on Heroku. Give it a try!',
    info2:
      'You will need to sign up, copy and paste the link of your desired picture and most of all, have fun!',
    url: 'https://face-detector-react-node.herokuapp.com/',
    repo: 'https://github.com/gambo94/face-detection-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chat.jpg',
    title: 'Real time chat',
    info: 'A realtime chat app built with Socket.io, Node.js, typeORM and VanillaJS',
    info2: 'It includes a sign up form, log in and rooms selection',
    // url: '',
    repo: 'https://github.com/gambo94/chat-websocket', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dice.jpg',
    title: 'A dice game restful API',
    info: 'An API that could support a dice game with various endpoints',
    info2: 'Built using NodeJS, MongoDB and JWT authentication',
    url: '',
    repo: 'https://github.com/gambo94/dice-game-API', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to talk with me?',
  btn: 'Email me',
  email: 'fedigambo94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fgambini/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gambo94',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
