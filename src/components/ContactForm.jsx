import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We\'ll be in touch soon!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitMessage('Oops! There was a problem submitting your form. Please try again.');
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="super-cool-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-4">
        <label htmlFor="name" className="labelerz">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="namerz"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="labelerz">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="namerz"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="labelerz">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="namerz"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="hahaButt"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitMessage && (
        <p className={`mt-4 text-center ${submitMessage.includes('Oops') ? 'text-red-500' : 'text-green-500'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;