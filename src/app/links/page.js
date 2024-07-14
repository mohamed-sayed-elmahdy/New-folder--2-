<<<<<<< HEAD
import Head from "next/head";
import { FaDownload } from "react-icons/fa";
import styles from "./links.module.css";

import React from "react";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.gradientBg}>
        <svg
          viewBox="0 0 100vw 100vw"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.noiseBg}
        >
          <filter id="noiseFilterBg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilterBg)"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.svgBlur}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive}></div>
        </div>
        <div className={`${styles.container} ${styles.darkMode}`}>
          <div className={styles.profile}>
            <img
              src="https://i.ibb.co/bgg2Zp5/Untitled-1-1.png"
              alt="Profile Photo"
              className={styles.profilePhoto}
            />
            <div className={styles.profileText}>
              <h1>
                Welcome to Dlicom <span className={styles.wave}>👋</span>
              </h1>
              <p className={styles.description}>
                A platform specialized in providing innovative technical
                solutions and customized applications aimed at improving and
                simplifying digital processes for individuals and companies.
              </p>
            </div>
          </div>
          <div className={styles.quickLinks}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">
                  <span>File one</span> <FaDownload />
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Dlicom file</span> <FaDownload />
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Dlicom file</span> <FaDownload />
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Dlicom file</span> <FaDownload />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
=======
import React from 'react';
import Head from 'next/head';
import GlowingBackground from './GlowingBackground';
import styles from './links.module.css'; // Import your CSS module
import Image from 'next/image';



function page() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlowingBackground />
      <div className={`${styles.container} ${styles.darkMode}`}>
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <Image
              src="/DLIComllogo2.png"
              alt="Dlicom Logo"
              width={120}
              height={120}
              className={styles.profilePhoto}
            />
            <div
              className={styles.profileText}
              style={{ fontFamily: 'Almarai, sans-serif' }}
            >
              <h1>
                Welcome to Dlicom {' '}
                <span className={styles.wave}>👋</span>
              </h1>
              <p className={styles.description}>
                A platform specialized in providing innovative technical solutions and customized applications aimed at improving and simplifying digital processes for individuals and companies
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.quickLinks}
          style={{ fontFamily: 'Almarai, sans-serif' }}
        >
          <h2>Social Media Links</h2>
          <ul>
            <li>
              <a
                href="https://dlicom.io"
                className={styles.quickLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Facebook</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://dlicom.io"
                className={styles.quickLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Instagram</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://dlicom.io"
                className={styles.quickLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Telgram</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://dlicom.io"
                className={styles.quickLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Linkedin</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://dlicom.io"
                className={styles.quickLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>x.com</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
>>>>>>> c5015572ce8edc4dbcb035a41d1f03bd24ceebc9
  );
}

export default page;
