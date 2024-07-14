"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import TealSection from "../Components/TealSection/TealSection";
import Email from "../Components/Email/Email";
import Image from "next/image";
import ModernUIComponent from "../Components/UserMessage/page";

function page() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Message: "",
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
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbybkmwFd2IWhWV6q9o3WyMkx0pZOwNuzw4kDIHRZut8tB15wB8N1pTar_Z4cF1VFtg/exec",
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
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Message: "",
    });
    setShowOverlay(true);
    setShowModernUI(true);
  }
  function hideModernUI() {
    setShowOverlay(false);
    setShowModernUI(false);
  }

  return (
    <div>
      <TealSection title="Contact us" />
      <div className={styles.contactSection}>
        <div className={`${styles.formConatiner} flex`}>
          <form onSubmit={(e) => Submit(e)} className={`${styles.form} flex`}>
            <h1>Contact Form</h1>
            <div className={`${styles.inputsContainer} flex`}>
              <input
                type="text"
                name="FirstName"
                placeholder="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="LastName"
                placeholder="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone"
              value={formData.Phone}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            />
            <textarea
              name="Message"
              placeholder="Message"
              rows="5"
              value={formData.Message}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            ></textarea>
            <button type="submit" className={styles.submitForm}>
              Send
            </button>
          </form>
          <div className={styles.imgContainer}>
            <Image
              className={styles.conatctImg}
              src="/explor.png"
              alt="conatctUsImg"
              width={1000}
              height={900}
              priority
            />
          </div>
        </div>
      </div>
      {showOverlay && <div className={styles.overlay}></div>}
      {showModernUI && (
        <ModernUIComponent
          onHide={hideModernUI}
          message="Thanks, Your Message Was Sent to Dlicom Team"
        />
      )}
      <Email />
    </div>
  );
}

export default page;
