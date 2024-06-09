import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Readme Generator',
    deployedLink: '//github.com/k-v09/ReadMe-Generator',
    repoLink: '//github.com/k-v09/ReadMe-Generator',
    image: '/src/assets/readmeGen.png'
  },
  {
    title: '',
    deployedLink: '',
    repoLink: '',
    image: ''
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