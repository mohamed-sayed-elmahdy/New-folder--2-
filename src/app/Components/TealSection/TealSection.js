import React from "react";
import styles from "./TealSection.module.css";

function TealSection({ title,Pargraph }) {
  return (
    <div>
      <div className={styles.blueSection}>
        <h1 className={styles.blueSectionTitle}>{title}</h1>
        <p className={styles.Pargraph}>{Pargraph}</p>
      </div>
    </div>
  );
}

export default TealSection;
