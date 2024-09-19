import React from 'react';
import '../css/global.css';


const Resume = () => (<><div id='rest' style={{display: 'flex', flexDirection: 'column'}}>
  <img src="/drainer.jpeg" alt="drainer" id="drainer" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}/>
  <section id="resumeContainer" style={{marginTop: '0px', borderTopRightRadius: '0px', borderTopLeftRadius: '0px', width: 'auto'}}>
    <ul className='resSkills'>
      <li>Team Player</li>
      <li>Critical Thinker</li>
      <li>Fast Learner</li>
      <li>Hard Worker</li>
      <li>Effective Communicator</li>
      <li>Problem Solver</li>
      <li>Analytical Mindset</li>
    </ul>
    <a href="/res.pdf" download style={{paddingLeft: '45%'}}>Download Resume</a>
  </section>
  </div></>);

export default Resume;
