import React from 'react';
import '../css/global.css';

const Project = ({ title, deployedLink, repoLink, description, image }) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <p>
      {description}<br/><br/>
      <a href={deployedLink}>Deployed App</a> | <a href={repoLink}>GitHub Repo</a>
    </p>
  </div>
);

export default Project;