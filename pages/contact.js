import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name, email, desc, phone);
    const details = { name, email, desc, phone };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    });

    setName(" ");
    setEmail(" ");
    setDesc(" ");
    setPhone(" ");
  };
  return (
    <div className="mt-10">
      <div className={styles.formparent}>
        <h2 className="text-5xl text-bold mb-5">Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="name" className={styles.lable}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className={styles.input}>
            <label htmlFor="email" className={styles.lable}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              name="email"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className={styles.input}>
            <label htmlFor="description" className={styles.lable}>
              Description
            </label>
            <textarea
              cols="51"
              rows="7"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="description"
              name="description"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className={styles.input}>
            <label htmlFor="exampleInputEmail1" className={styles.lable}>
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phone"
              name="phone"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
