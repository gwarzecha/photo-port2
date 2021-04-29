import React, { useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  function handleChange(e) {
    // uses setFormState to updated the formState value for the name property;
    // assigns the value taken from the input field with e.target.value, assigns
    //this value to the property e.target.name. The [] create dynamic property names.
    //The spread operator is used to 
    //retain the other key-value pairs in the obj; without ... , the formState
    //obj would be overwritten to only contain name: value
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );

}

export default ContactForm;