import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";

import { FaVimeo } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`${styles.footerSection} flex`}>
      <div className={`${styles.leftFooterContainer} flex`}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/dLIComllogo.webp"
              alt="DliCom Logo"
              width={130}
              height={40}
              priority
            />
          </Link>
        </div>
        <p>
          DLICOM App aspires to unify the disparate elements of the
          cryptocurrency market by serving as a decentralized social network and
          trading platform.
        </p>
        <div className={`${styles.socialMediaIconsContainer} flex`}>
        <a
            href="https://x.com/DlicomApp?t=aA3-05woMpRIhMGMmICTmA&s=08"
            target="_blank"
          >
            <BsTwitterX className={styles.twitter} />
          </a>
          <a target="_blank">
            <RiInstagramFill className={styles.instagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/shlenpower/mycompany/"
            target="_blank"
          >
            <FaLinkedin className={styles.linkedin} />
          </a>

          <a target="_blank">
            <FaSquareFacebook className={styles.youtube} />
          </a>
        </div>
        <p>© Copyright 2024 Dlicom. All Rights Reserved</p>
      </div>
      <div className={`${styles.rightFooterContainer} flex`}>
        <div className={`${styles.linksColumnContainer} flex`}>
          <Link href="#futureSection">Features</Link>
          <a
            href="/DlicomWhitePaper.pdf"
            target="_blank"
            className={`${styles.link} menuItem`}
          >
            Dlicom WhitePaper
          </a>
          <Link
            className={`${styles.link} menuItem`}
            href="https://shlenpower.com/"
            target="_blank"
          >
            ShlenPower Group
          </Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>

          <Link href="/">Home</Link>
          <Link href="/coomingSoon">About</Link>
          <Link href="/coomingSoon">Careers</Link>
          <Link href="/contactUs">Contact</Link>
          <Link href="/faqs">FAQ</Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Our Knowledge</h2>
          <Link href="/stakeAndEarn" className={styles.linkmenu}>
            Stake And Earn
          </Link>
          <Link href="/aboutDlicom" className={styles.linkmenu}>
            About Dlicom
          </Link>
          <Link href="/dlicomEcoSystem" className={styles.linkmenu}>
            Dlicom Eco System
          </Link>
        </div>
      </div>
    </div>
  );
}
