import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Import the CSS file
import { FaMobile, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State to manage the response message
  const [error, setError] = useState(false); // State to manage the error status

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8h9358h",
        "template_g7krt6d",
        form.current,
        "Nqo_-GoFWv42se3zd"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Message sent successfully!");
          setError(false);
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.error("FAILED...", error);
          setMessage("Message not sent. Please try again.");
          setError(true);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-detail">
          <FaMobile className="contact-icon" />
          <span>+91 9663131304</span>
        </div>
        <div className="contact-detail">
          <FaMobile className="contact-icon" />
          <span>+91 9663131304</span>
        </div>
        <div className="contact-detail">
          <FaEnvelope className="contact-icon" />
          <span>nikhil.enterprises.234@gmail.com</span>
        </div>
        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-icon" />
          <span>
            10 8th main, 9th Cross Rd, opposite Balaji marketing, Balaji Layout,
            AMCO Colony, Bengaluru, Karnataka 560094
          </span>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label className="form-label">Name</label>
        <input type="text" name="user_name" className="form-input" required />
        <label className="form-label">Email</label>
        <input type="email" name="user_email" className="form-input" required />
        <label className="form-label">Message</label>
        <textarea name="message" className="form-textarea" required />
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
      {message && (
        <div className={`form-message ${error ? "error" : "success"}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Contact;
