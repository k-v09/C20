import React from 'react';

const Resume = () => (<>
  <img src="/drainer.jpeg" alt="Drainer" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}/>
  <section style={{marginTop: '0px', borderTopRightRadius: '0px', borderTopLeftRadius: '0px', minWidth: '100vw'}}>
    <a href="../assets/res.pdf" download>Download Resume</a>
    <ul>
      <li>Proficiency 1</li>
      <li>Proficiency 2</li>
      <li>Proficiency 3</li>
    </ul>
  </section>
  </>);

export default Resume;
