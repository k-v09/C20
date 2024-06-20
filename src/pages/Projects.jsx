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
    <div className="project">
      <h3>Geometric Fourier Transform</h3>
      <img src="ReverseFourier.png" alt="Reverse Fourier Formula"  id='gft'/>
      <p>
        My first ever completed math project, the Reverse Fourier is a single formula which allows 
        sine wave harmonic addition to be expressed as a single wave with sin(x) factored out. 
        I'm not quite sure how useful it is, but I am sure that this will always have a special 
        place in my heart. One of my biggest passions is making subjects often seen as out of reach 
        more approachable. This geometric adaptation of the fourier transform allows for a deeper 
        understanding of how sound works to be given to those who otherwise wouldn't be able to do 
        so.<br/><br/>
      <a>Paper on This Project in the Works</a>
      </p>
    </div>
    <div className="project">
      <h3>Instantaneous Interaction</h3>
      <img src="page-0.jpg" alt="Instanteous Interaction"  id='ii'/>
      <p>
        For my senior research project, I branched out from theoretical mathematics to theoretical 
        physics. Though I have never been formally trained in relativity theory or quantum mechanics, 
        I was determined to tackle a subject that not only falls into those fields, but also pushed 
        the limits of what was achievable on my own. Attached here is the shortened version of my 
        paper, "Instantaneous Interaction With Time."<br/><br/>
      <a href="/Instantaneous Interaction With Time copy.pdf">View Paper</a> | <a href="/Instantaneous Interaction With Time copy.pdf" download>Download Paper</a>
      </p>
    </div>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Projects;