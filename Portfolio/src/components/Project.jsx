import React from 'react';
import '../css/global.css';

const Project = ({ title, deployedLink, repoLink, image }) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <p>
      <a href={deployedLink}>Deployed App</a> | <a href={repoLink}>GitHub Repo</a>
    </p>
  </div>
);

export default Project;