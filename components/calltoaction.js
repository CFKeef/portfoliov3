import React, { useState } from "react";
import axios from "axios";

import styles from "../styles/CallToAction.module.scss";

const CallToAction = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isShowing, setShowing] = useState(true);

  // Handles submitting our form to back end
  const submitForm = (e) => {
    const resetState = () => {
      setName("");
      setEmail("");
      setMessage("");
      setShowing(false);
    };
    e.preventDefault();
    axios
      .post("/api/contact", {
        email: email,
        name: name,
        message: message,
      })
      .then((res) => {
        resetState();
        if (res.status === 200) {
          console.log("Message sent!");
        } else console.log("Message Failed");
      })
      .catch((e) => {
        console.log("Error Occured :( " + e);
      });
  };

  const generateContent = () => {
    if (isShowing)
      return (
        <React.Fragment>
          <span className={`greenHeader`}>
            <mark>Let's</mark> chat
          </span>
          <form onSubmit={(e) => submitForm(e)}>
            <div>
              <input
                required
                id="name"
                name="name"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.textBox}>
              <textarea
                required
                id="body"
                name="body"
                type="text"
                value={message}
                placeholder="Message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </React.Fragment>
      );
    else {
      return <h1 className={styles.messageSuccess}>Talk to you soon!</h1>;
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      {generateContent()}
    </section>
  );
};

export default CallToAction;
