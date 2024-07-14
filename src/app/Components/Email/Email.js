"use client";
import React, { useState } from "react";
import styles from "./email.module.css";
import ModernUIComponent from "../UserMessage/page";

function Email() {
  const [formData, setFormData] = useState({
    Email: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [showModernUI, setShowModernUI] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function Submit(e) {
    e.preventDefault();
    const formEle = document.getElementById("adminTwo");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzaHBp1Di_aG3vOwcRXMijYSYT2FaR-i__DccQp7QSioMrfNFdKxjcg_W4ryH_i1l8/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormData({
      Email: "",
    });
    setShowOverlay(true);
    setShowModernUI(true);
  }
  function hideModernUI() {
    setShowOverlay(false);
    setShowModernUI(false);
  }

  return (
    <div className={styles.emailsubscriptioncontainer}>
      <div className={styles.actionTitleAndInputContainer}>
        <h1>Newsletter </h1>
        <form
          onSubmit={(e) => Submit(e)}
          className={`${styles.form} flex`}
          id="adminTwo"
        >
          <div className={styles.inputwithbutton}>
            <input
              type="email"
              name="Email"
              placeholder="Your email address"
              className={styles.emailinput}
              value={formData.Email}
         
           
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.subscribebutton}>
              Subscribe
            </button>
          </div>
        </form>
        <p>
          To combat the increasing trend of centralized control over social
          media platforms, DLICOM APP may provide a censorship-resistant
          alternative by employing a decentralized network such as a blockchain.
        </p>
      </div>
      {showOverlay && <div className={styles.overlay}></div>}
      {showModernUI && (
        <ModernUIComponent
          onHide={hideModernUI}
          message="Congratulations! You've successfully subscribed to Dlicom App News"
        />
      )}
    </div>
  );
}

export default Email;
