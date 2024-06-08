import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    deployedLink: 'http://example.com',
    repoLink: 'http://github.com/example',
    image: 'path/to/image.jpg'
  },
];

const Portfolio = () => (
  <section>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Portfolio;