import React from 'react';
import '../css/global.css';

const Resume = () => (<>
  <img src="/drainer.jpeg" alt="Drainer" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}/>
  <section style={{marginTop: '0px', borderTopRightRadius: '0px', borderTopLeftRadius: '0px', minWidth: '100vw'}}>
    <ul className='resSkills'>
      <li>Team Player</li>
      <li>Critical Thinker</li>
      <li>Fast Learner</li>
      <li>Hard Worker</li>
      <li>Effective Communicator</li>
      <li>Problem Solver</li>
      <li>Analytical Mindset</li>
    </ul>
    <a href="../assets/res.pdf" download style={{paddingLeft: '45%'}}>Download Resume</a>
  </section>
  </>);

export default Resume;
