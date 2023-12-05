import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const body = `Full Name: ${form.name}<br />Email Address: ${form.email}<br />Phone Number: ${form.number}<br />Message: ${form.message}`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: import.meta.env.VITE_SMTPJS_USERNAME,
      Password: import.meta.env.VITE_SMTPJS_PASSWORD,
      To: import.meta.env.VITE_SMTPJS_EMAILTO,
      From: import.meta.env.VITE_SMTPJS_EMAILFROM,
      Subject: form.subject,
      Body: body,
    }).then((message) => alert(message));
  }

  // console.log(import.meta.env.VITE_SMTPJS_USERNAME);
  // console.log(import.meta.env.VITE_SMTPJS_PASSWORD);
  // console.log(import.meta.env.VITE_SMTPJS_EMAILTO);

  return (
    <div id="contact-page">
      <div className="container">
        <div className="contact-form-container">
          <h1 className="pixelify-sans">LEAVE A MESSAGE!</h1>
          <form action="#" onSubmit={handleSubmit}>
            <div>
              <input
                className="input"
                name="name"
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="input"
                name="number"
                type="text"
                placeholder="Phone Number"
                value={form.number}
                onChange={handleChange}
              />
              <input
                className="input"
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="input"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
