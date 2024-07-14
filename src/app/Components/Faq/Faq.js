"use client";
import { React, useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question:
        "How many DLICOM Token will be issued in total, and what share of those tokens will be sold during the ICO?",
      answer:
        "Seventy percent of DLICOM tokens in circulation are represented by a supply of 610.000.000 tokens.",
    },
    {
      question: "Can I trade my DLI tokens on external exchanges?",
      answer:
        "Details about external trading opportunities for DLI tokens will be communicated as and when partnerships with exchanges are established.",
    },
    {
      question: "How do I claim my DLI tokens after the escrow period?",
      answer:
        "To claim your DLI tokens after the escrow period, users can select the 'Claim Tokens' option in the SFR Platform. Tokens will be directly sent to the connected wallet.",
    },
    {
      question:
        "Are DLI tokens connected with the ShlenPower community in any way?",
      answer:
        "Yes, the value and utility of DLI tokens are intrinsically tied to the expansion of the ShlenPower community and ecosystem.",
    },
    {
      question: "Are there any fees associated with DLI token transactions?",
      answer:
        "Transactions outside our platform, fees may vary depending on the external network or exchange.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.fAQsSection} flex`}>
      <h1 className={styles.fAQsSectionTitle}>
        Frequently Asked Questions (FAQs)
      </h1>
      <div className={`${styles.container} flex`}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.futureImg}
            src="/blockchain.png"
            alt="img"
            width={500}
            height={400}
            priority
          />
        </div>
        <div className={`${styles.faqcontainer} flex`}>
          {questions.map((item, index) => (
            <div
              className={`${styles.question}`}
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className={`${styles.flexQuestion} flex`}>
                <div className={styles.questionText}>{item.question}</div>
                <div className="plus-minus-sign">
                  {openIndex === index ? "-" : "+"}
                </div>
              </div>
              {openIndex === index && (
                <div className={`${styles.answer}`}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
