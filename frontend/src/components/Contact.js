import React, { useRef, useState } from 'react';
import axios from 'axios';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowRight, FiExternalLink, FiMail } from 'react-icons/fi';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
const CONTACT_EMAIL = 'ayushraj12121212@gmail.com';
const CONTACT_REQUEST_TIMEOUT_MS = 30000;

const contactLinks = [
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: <FiMail /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushraj178/', icon: <FaLinkedinIn /> },
  { label: 'GitHub', href: 'https://github.com/Ayush-Raj178', icon: <FaGithub /> },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgressRef = useRef(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submissionInProgressRef.current) return;

    submissionInProgressRef.current = true;
    setIsSubmitting(true);
    setStatus({ type: 'loading', message: 'Sending your message…' });

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/contact`,
        {
          ...formData,
          subject: 'New message from Ayush Raj portfolio',
        },
        { timeout: CONTACT_REQUEST_TIMEOUT_MS },
      );

      if (response.data?.success !== true) {
        throw new Error('The contact API did not confirm delivery.');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatus({ type: 'success', message: 'Message sent. Thanks for reaching out.' });
    } catch (error) {
      const requestTimedOut = error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT';
      setStatus({
        type: 'error',
        message: requestTimedOut
          ? 'The request timed out. Please try again.'
          : error.response?.data?.message || 'The message could not be sent. Please try again.',
      });
    } finally {
      submissionInProgressRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="page-container contact-frame">
        <div className="contact-copy">
          <p className="section-index">Contact</p>
          <h2 id="contact-heading">Let’s build something reliable.</h2>
          <p>I’m open to connecting with recruiters and engineering teams about software engineering, Java backend, and full-stack opportunities.</p>
          <ul className="contact-links">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="contact-link-icon" aria-hidden="true">{link.icon}</span>
                  <span>{link.label}</span>
                  <FiExternalLink aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" maxLength="100" required placeholder="Your name" />
          </div>
          <div className="field-group">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" maxLength="160" required placeholder="you@example.com" />
          </div>
          <div className="field-group">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows="5" maxLength="3000" required placeholder="Tell me about the role or team." />
          </div>
          <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'} <FiArrowRight aria-hidden="true" />
          </button>
          <p className={`form-status status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite">
            {status.message || 'Your details are used only to reply to your message.'}
            {status.type === 'error' && (
              <> Email me directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</>
            )}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
