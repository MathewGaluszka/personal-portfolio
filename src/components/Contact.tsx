import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SITE } from "../data/site";
import "../assets/styles/Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    const missingName = name.trim() === "";
    const missingEmail = email.trim() === "";
    const missingMessage = message.trim() === "";

    setNameError(missingName);
    setEmailError(missingEmail);
    setMessageError(missingMessage);

    if (missingName || missingEmail || missingMessage) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `From: ${name.trim()} (${email.trim()})\n\n${message.trim()}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Email, LinkedIn, or the form below — the send button opens your mail app to{" "}
            {SITE.email}.
          </p>
          <div className="contact-links">
            <a href={`mailto:${SITE.email}`}>
              <EmailOutlinedIcon fontSize="small" />
              {SITE.email}
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </a>
            <a href={SITE.github} target="_blank" rel="noreferrer">
              <GitHubIcon fontSize="small" />
              GitHub
            </a>
          </div>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
