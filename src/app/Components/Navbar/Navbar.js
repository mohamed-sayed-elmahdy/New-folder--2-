"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown, IoIosCloseCircle } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropmenu, setOpenDropmenu] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const toggleDropmenu = (menu) => {
    setOpenDropmenu(openDropmenu === menu ? null : menu);
  };

  return (
    <div>
      <nav className={styles.navContainer}>
        <div className={styles.logocontainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logo}
              src="/DLIComllogo2.png"
              alt="DLIComl logo"
              width={45}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className={`${styles.links} flex`}>
          <Link className={`${styles.link} menuItem`} href="/">
            Home
          </Link>
          <Link
            className={`${styles.link} menuItem`}
            href="https://shlenpower.com/"
            target="_blank"
          >
            ShlenPower Group
          </Link>
          <a
            href="/DlicomWhitePaper.pdf"
            target="_blank"
            className={`${styles.link} menuItem`}
          >
            Dlicom WhitePaper
          </a>
          <div className={`${styles.menu} menuItem`}>
            <span>
              Our Knowledge <IoIosArrowDown className={styles.menuIcon} />
            </span>
            <ul className={`${styles.dropmenu}`}>
              <Link href="/whatIsBlockChain" className={styles.linkmenu}>
                What is Blockchain?
              </Link>
              <Link href="/whatisZeroKnowledge" className={styles.linkmenu}>
                What is Zero Knowledge?
              </Link>
              <Link href="/dao" className={styles.linkmenu}>
                DAO
              </Link>
              <Link href="/decentralization" className={styles.linkmenu}>
                Decentralization
              </Link>
              <Link href="/dapp" className={styles.linkmenu}>
                DAPP
              </Link>
              <Link href="/stakeAndEarn" className={styles.linkmenu}>
              Stake And Earn
              </Link>
              <Link href="/aboutDlicom" className={styles.linkmenu}>
              About Dlicom
              </Link>
              <Link href="/dlicomEcoSystem" className={styles.linkmenu}>
              Dlicom Eco System
              </Link>
            </ul>
          </div>
          <Link className={`${styles.link} menuItem`} href="/faqs">
            FAQ
          </Link>
          <Link className={`${styles.link} menuItem`} href="/coomingSoon">
            Careers
          </Link>
          <Link className={`${styles.link} menuItem`} href="/contactUs">
            Contact us
          </Link>
        </div>
      </nav>
      <nav className={styles.navMobileContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/DLIComllogo2.png"
              alt="DLIComl logo"
              width={45}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <HiMenuAlt3 />
        </div>
        <div
          className={`${styles.sidebar} ${
            showSidebar ? styles.showSidebar : ""
          }`}
        >
          <div className={styles.closeIcon} onClick={closeSidebar}>
            <IoIosCloseCircle />
          </div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link
              className={`${styles.link}`}
              href="https://shlenpower.com/"
              target="_blank"
            >
              ShlenPower Group
            </Link>
            <a
              href="/DlicomWhitePaper.pdf"
              target="_blank"
              className={`${styles.link} menuItem`}
            >
              Dlicom WhitePaper
            </a>
            <div
              className={`${styles.menu} flex menuItem`}
              onClick={() => toggleDropmenu("blockchain")}
            >
              <span>
                Our Knowledge <IoIosArrowDown />
              </span>
              <ul
                className={`${styles.dropmenu} flex ${
                  openDropmenu === "blockchain" ? styles.showDropmenu : ""
                }`}
              >
                <IoIosCloseCircle
                  className={styles.closeIcon}
                  onClick={() => toggleDropmenu("blockchain")}
                />
                <Link href="/whatIsBlockChain" className={styles.linkmenu}>
                  What is Blockchain?
                </Link>
                <Link href="/whatisZeroKnowledge" className={styles.linkmenu}>
                  What is Zero Knowledge?
                </Link>
                <Link href="/dao" className={styles.linkmenu}>
                  DAO
                </Link>
                <Link href="/decentralization" className={styles.linkmenu}>
                  Decentralization
                </Link>
                <Link href="/dapp" className={styles.linkmenu}>
                  DAPP
                </Link>
                <Link href="/stakeAndEarn" className={styles.linkmenu}>
              Stake And Earn
              </Link>
              <Link href="/aboutDlicom" className={styles.linkmenu}>
              About Dlicom
              </Link>
              <Link href="/dlicomEcoSystem" className={styles.linkmenu}>
              Dlicom Eco System
              </Link>
              </ul>
            </div>
            <Link className={`${styles.link} menuItem`} href="/faqs">
              FAQ
            </Link>
            <Link className={`${styles.link} menuItem`} href="/coomingSoon">
              Careers
            </Link>
            <Link className={`${styles.link} menuItem`} href="/contactUs">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
