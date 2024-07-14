import React from "react";
import styles from "./page.module.css"
import Link from "next/link";

function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cooming Soon</h1>
      <Link href="/">
              <button className={`${styles.backBtn} flex`}>Back To Home</button>
            </Link>
    </div>
  );
}

export default page;
