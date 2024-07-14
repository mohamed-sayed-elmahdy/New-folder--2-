"use client";
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Scroll from './testapp';
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [image, setImage] = useState("/Completechatfeatures.png");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <div className="mainSection">
        <div className='mainSection-container'>
          <div className="sticky">
            <ImgAnimation image={image} />
          </div>
          <div>
            <Scroll imgsArray={[
              "/Completechatfeatures.png",
              "/Cryptocurrencytransactions.png",
              'Multicryptowallet.png'
            ]} setImage={setImage} />
          </div>
          <div className='log4 '></div>
        </div>
      </div>
    </>
  );
}

const ImgAnimation = ({ image }) => {
  return (
    <div className='relative'>
      <div className='texSection'>
        <div className='text'>
          <h1>Dlicom Application</h1>
          <h2>Nothing Better</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="ImgsContainer">
            <img className='dlicomAppImg'
              src="/GooglePlay.png"
              alt="GooglePlay Img"
              width={140}
              height={48}
            />
            <img className='dlicomAppImg'
              src="/apple.png"
              alt="apple Img"
              width={140}
              height={48}
            />
          </div>
        </div>
        <div className='mockup'>
          <div className='phoneContainer'>
            <img width={250} src='/iPhoneMockup.png' />
          </div>
          <div className='imgContainer'>
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
