"use client";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ReactLenis } from "@studio-freight/react-lenis";
import { IoIosCall } from "react-icons/io";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll({ imgsArray, setImage }) {
  const main = useRef();

  useEffect(() => {
    const boxes = gsap.utils.toArray('.box');
    boxes.forEach((box, i) => {
      gsap.timeline({
        scrollTrigger: {
          onEnter: () => {
            setTimeout(() => {
              setImage(imgsArray[i]);
            }, 300);
          },
          onEnterBack: () => {
            setTimeout(() => {
              setImage(imgsArray[i]);
            }, 300);
          },
          trigger: box,
          start: 'bottom bottom',
          end: 'top top',
          scrub: true,
        }
      })
      .fromTo(box, { opacity: 0, x: 250, scale: 1.2, transform: `rotate3d(0.2, 1, 0, 60deg)` }, { opacity: 0.5, x: 0, duration: 2 })
      .to(box, { scale: 1.5, duration: 2, opacity: 1, transform: `rotate3d(0.2, 1, 0, 0deg)` }, "70%")
      .to(box, { scale: 1, opacity: 0, x: 250, rotateY: -20, duration: 2, transform: `rotate3d(-0.2, 1, 0, -60deg)` });
    });
  }, [imgsArray, setImage]);

  return (
    <ReactLenis root>
      <div className="animationText" ref={main}>
        <div className="box">
          <span className='IoIosCall'><IoIosCall /></span>
          <span>Answer a call while paddleboarding</span>
        </div>
        <div className="box">
          <span></span>
          <span>consectetur adipisicing elit. Ducimus illo saepe, quis quib</span>
        </div>
        <div className="box">
          <span></span>
          <span>o facere, ex quas officia animi laboriosam provi</span>
        </div>
      </div>
    </ReactLenis>
  );
}
