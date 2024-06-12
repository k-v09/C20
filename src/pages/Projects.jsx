import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Horse Power',
    deployedLink: 'https://horse-power.netlify.app/',
    repoLink: 'https://github.com/k-v09/Horse-Power',
    description: 'My final project of the coding bootcamp, horsepower aims to be the ultimate fitness tool for reaching your goals. There will be some future development required to make this the app I originally envisioned, but for now I\'m happy.',
    image: '/background.jpg'
  },
  {
    title: 'Trudge',
    deployedLink: 'https://ryans-hub.github.io/GivHub/',
    repoLink: 'https://github.com/ryans-hub/GivHub',
    description: 'My first group project of the coding bootcamp, Trudge is the best way to find the safest trail near you! The app compiles trail data, crime data, and weather data to give you the best trails possible.',
    image: '/trudge.png'
  },
  {
    title: 'Readme Generator',
    deployedLink: '//github.com/k-v09/ReadMe-Generator',
    repoLink: '//github.com/k-v09/ReadMe-Generator',
    description: 'I\'m not a fan of readmes and actually I loathe making them. This app is a great way to make a readme without stooping so low as to actually MAKE one.',
    image: 'readmeGen.png'
  },
  {
    title: 'JavaScript Quiz',
    deployedLink: 'https://k-v09.github.io/JS-Quiz/',
    repoLink: 'https://github.com/k-v09/JS-Quiz',
    description: 'This app was a great way to both practice my knowledge in javascript and create a way to practice and maintain that knowledge. The quiz includes information from computer science, web design, and maybe a couple extras thrown in there too!',
    image: 'jsQuiz.png'
  }
];

const Projects = () => (
  <section>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Projects;