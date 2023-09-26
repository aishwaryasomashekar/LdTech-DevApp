import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [Data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://13.234.23.179:3004/contact/submit', Data);
      console.log(response.data);
      setMessage('We will contact you soon');
      setError('');
       // Clear the form fields after click on send button
         setData({
           name: '',
           email: '',
           message: '',
        });
         // Automatically hide the success message after 10 seconds
        setTimeout(()=>{
          setMessage(''); 
        }, 5000);
    } catch (err) {
      console.error(err.response.data.error);
      setError(err.response.data.error); // Set the error message
      setMessage('');
        // Automatically hide the error message after 10 seconds
         setTimeout(()=>{
           setError(''); 
        }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <br />
          <p>
            Use our contact form to get in touch with our team. We're here to answer any questions you have about our DevOps automation software and how it can benefit your business.
          </p>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={Data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={Data.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={Data.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Send</button>
            {message && <div className="success-message" style={{ color: 'white' }}>{message}</div>}
            {error && <div className="error-message" style={{ color: 'white' }}>{error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
