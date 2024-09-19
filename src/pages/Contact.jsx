import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h">
      <div className="redundancy">
        <h1 className="good-head">
          Get in Touch
        </h1>
        <p className="small-p">
          I'd love to hear from you! Whether you have a question about my work, 
          want to discuss a potential project, or just want to say hello, 
          feel free to drop me a message using the form below.
        </p>
        <div className="conforming">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;