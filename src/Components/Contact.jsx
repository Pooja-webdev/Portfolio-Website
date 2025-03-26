import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import LinkenIn from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i00fkxd", "template_xmx9uvq", form.current, {
        publicKey: "Zy5OxZhqBWObbaABo",
      })
      .then(
        () => {
          setMessage({ type: "success", text: "Message sent successfully!" });
        },
        (error) => {
          setMessage({
            type: "error",
            text: "Failed to send message. Try again later.",
          });
          console.error("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <div id="Contact">
        <h1>Get In Touch</h1>
        <p>Please fill out the form to contact me</p>
        {message && (
          <div className={`message-box ${message.type}`}>{message.text}</div>
        )}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="message"
            name="message"
            cols="50"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submit-btn" value="send">
            Submit
          </button>
        </form>
      </div>

      <section className="links">
        <a
          href="mailto:poojaprem160919@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="gmail-image" />
        </a>
        <a
          href="https://www.facebook.com/Pooja Premkumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook-image" />
        </a>
        <a
          href="https://www.instagram.com/poojaprem.tn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram-image" />
        </a>
        <a
          href="https://www.linkedin.com/in/pooja-govindaraj-438908255"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkenIn} alt="LinkenIn-image" />
        </a>
        <a
          href="https://wa.me/918056999580"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp-image" />
        </a>
      </section>

      <hr />
    </>
  );
};

export default Contact;
