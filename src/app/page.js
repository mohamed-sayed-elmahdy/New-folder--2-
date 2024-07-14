import Image from "next/image";
import styles from "./page.module.css";
import Email from "./Components/Email/Email";
import Link from "next/link";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { GiClover } from "react-icons/gi";
import Faq from "./Components/Faq/Faq";
import { FaLinkedin } from "react-icons/fa";
import App from "./Components/MainSection/App";


export default function Home() {
  return (
    <div>
      {/* <div className={styles.mainSection}>
        <div className={`${styles.textContainer} flex`}>
          <h1 className={styles.mainSectionTitle}>
            Join the Decentralized Revolution with Dlicom
          </h1>
          <p className={styles.mainSectionPara}>
            Serving Our Community in the most secure and Private way.
          </p>
          <div className={`${styles.ImgsContainer} flex`}>
            <Image
              className={styles.dlicomAppImg}
              src="/GooglePlay.png"
              alt="GooglePlay Img"
              width={140}
              height={48}
              priority
            />
            <Image
              className={styles.dlicomAppImg}
              src="/apple.png"
              alt="apple Img"
              width={140}
              height={48}
              priority
            />
          </div>
        </div>
        <div>
          
        </div>
      </div> */}
<App/>

      {/* <div className={`${styles.videoSection} flex`}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/wpdJOcj6XRE?si=6Rri2u76W2ihdDA6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <p className={styles.videoPara}>
          dilcom app video example about all futures in app
        </p>
      </div> */}
      <div className={styles.whitePaperSection}>
        <div className={`${styles.whitePaperContainer} flex`}>
          <h1 className={styles.whitePaperTitle}>
            Download <br /> White Paper
          </h1>
          <p className={styles.whitePaperpara}>
            We create experiences that fuel connections
          </p>
          <a
            href="/DlicomWhitePaper.pdf"
            target="_blank"
            className={`${styles.link} menuItem`}
          >
            <button className={styles.whitePaperBtn}>Download</button>
          </a>
        </div>
      </div>

      <div className={styles.DlicomFeaturesSection} id="futureSection">
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1 className={styles.DlicomFeaturesTitle}>DLICOM Features</h1>
          </div>
          <div className={styles.DlicomFeaturesCardsConatiner}>
            <div className={styles.easyAppCard}>
              <h1 className={styles.easyAppCardTitle}>
                Multi-Crypto Wallet Management
              </h1>
              <Image
                className={styles.firstImg}
                src="/first.png"
                alt="appleImg"
                width={4900}
                height={3700}
                priority
              />
            </div>

            <div className={styles.columncards}>
              <div className={`${styles.columncard} bottomTwo`}>
                <div className={styles.ImgBottomContainer}>
                  <Image
                    className={styles.columncardProfileImg}
                    src="/bottom.png"
                    alt="appleImg"
                    width={4750}
                    height={3700}
                    priority
                  />
                </div>
                <h2>Decentralized Social Media Platform</h2>
                <p>Secure User Profile</p>
              </div>
            </div>
            <div className={styles.columncards}>
              <div className={`${styles.columncard} bottomTwo`}>
                <h2>Seamless Chat Experience</h2>
                <p>Secure Messaging</p>
                <div className={styles.leftImgContainer}>
                  <Image
                    className={styles.leftImg}
                    src="/topBottom.png"
                    alt="appleImg"
                    width={4750}
                    height={3700}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className={styles.smallcolumncards}>
              <div className={styles.columncardsTop}>
                <div className={styles.ImgsContainer}>
                  <Image
                    className={styles.userProfileImg}
                    src="/pngprofile.png"
                    alt="appleImg"
                    width={8025}
                    height={6000}
                    priority
                  />
                </div>
                <h2 className={styles.columncardstopTitle}>
                  Swap Functionality
                </h2>
                <p className={styles.columncardstopPara}>
                  more than 100+ different assets to swap
                </p>
              </div>
            </div>
            <div className={styles.smallcolumncards}>
              <div className={styles.columncardsTop}>
                <div className={styles.ImgsContainer}>
                  <Image
                    className={styles.userProfileImg}
                    src="/bottomright.png"
                    alt="appleImg"
                    width={8090}
                    height={6070}
                    priority
                  />
                </div>
                <h2 className={styles.columncardstopTitle}>Stake & Earn</h2>
                <p className={styles.columncardstopPara}>
                  Loyalty and Rewards Programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.futureSection} flex`}>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.futureSectionText} flex`}>
            <h3>Dlicom Application</h3>
            <p className={styles.firstPara}>
              The Future of Socializing and Trading Digital Assets
            </p>
            <p className={styles.secondPara}>
              We're consistently pushing the boundaries of innovation to create
              groundbreaking solutions that effectively meet today's challenges.
            </p>
          </div>
          <div className={`${styles.contentContainer} flex`}>
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
            <div className={`${styles.textContent} flex`}>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Stay anonymous</h2>
                <p className={styles.para}></p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>
                  Secure Encrypted Chat for Individuals and Groups
                </h2>
                <p className={styles.para}></p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>
                  Multiplatform Cryptocurrency Wallet
                </h2>
                <p className={styles.para}></p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Unique payment reference</h2>
                <p className={styles.para}></p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>
                  Cryptocurrency Exchanges together with online banking
                </h2>
                <p className={styles.para}></p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>
                  Browsing data adopting with Web 3.0
                </h2>
                <p className={styles.para}></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.solveSection}>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.solveSectionText} flex`}>
            <h3>Dlicom Application</h3>
            <p className={styles.firstPara}>What does it solve?</p>
          </div>

          <div className={`${styles.cardsContainer} flex`}>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>Centralized Control</h2>
                <p>
                  To combat the increasing trend of centralized control over
                  social media platforms, DLICOM APP may provide a
                  censorship-resistant alternative by employing a decentralized
                  network such as a blockchain.
                </p>
              </div>
            </div>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>ECO SYSTEM</h2>
                <p>
                  DLICOM App may assist to unify the disparate parts of the
                  cryptocurrency sector by integrating previously separate
                  services like social networking, messaging, and trading.
                </p>
              </div>
            </div>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>Privacy</h2>
                <p>
                  By incorporating blockchain technology, DLICOM will be able to
                  provide further privacy protections, including message-level
                  encryption and anonymous user profiles based on
                  Ethereum network.
                </p>
              </div>
            </div>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>Exchange</h2>
                <p>
                  Cryptocurrency trading can be confusing, but this application
                  may make it simpler by connecting users to many markets and
                  streamlining the process with an intuitive design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.roadMapSection}>
        <div className={styles.container}>
          <div className={`${styles.roadMapCard} flex`}>
            {/* <GiClover className={styles.icon} /> */}

            <h1 className={styles.roadMaptitle}>Road Map</h1>
            <p className={styles.roadMapPaperpara}>
              Boost your venture with adaptable and progressive consolidation
              strategies & technologies
            </p>
            {/* <a target="_blank" className={`${styles.link} menuItem`}>
              <button className={styles.roadMapBtn}>Discover More</button>
            </a> */}
          </div>
          <Marquee
            fade={true}
            direction="top"
            pauseOnHover={true}
            className={`${styles.marquee} `}
          >
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>Jan 2024</div>
              <div className={styles.event}>Dlicom App Token Sales Launch</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>Feb 2024</div>
              <div className={styles.event}>Developing Community Network</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>March 2024</div>
              <div className={styles.event}>Research and Development</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>April 2024</div>
              <div className={styles.event}>Launching ShlenPower Academy</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>May 2024</div>
              <div className={styles.event}>Launching SFR Platform</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>July 2024</div>
              <div className={styles.event}>Dlicom Beta Launch</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={`${styles.date} ${styles.dlicom}`}>
                Dlicom Platform Launch
              </div>
              <div className={styles.event}>
                After reaching a Community of 10.000 Full version release
              </div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>Token Listing</div>
              <div className={styles.event}>
                100% Dli Acquisition by Community
              </div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>Jan 2024</div>
              <div className={styles.event}>Dlicom App Token Sales Launch</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>Feb 2024</div>
              <div className={styles.event}>Developing Community Network</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>March 2024</div>
              <div className={styles.event}>Research and Development</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>April 2024</div>
              <div className={styles.event}>Launching ShlenPower Academy</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>May 2024</div>
              <div className={styles.event}>Launching SFR Platform</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>July 2024</div>
              <div className={styles.event}>Dlicom Beta Launch</div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={`${styles.date} ${styles.dlicom}`}>
                Dlicom Platform Launch
              </div>
              <div className={styles.event}>
                After reaching a Community of 10.000 Full version release
              </div>
            </div>
            <div className={styles.roadMapAnimationCard}>
              <div className={styles.date}>Token Listing</div>
              <div className={styles.event}>
                100% Dli Acquisition by Community
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      <div className={`${styles.growthSection} flex`}>
        <div className={`${styles.container} flex`}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.growthImg}
              src="/growth.png"
              alt="img"
              width={500}
              height={400}
              priority
            />
          </div>
          <div className={`${styles.cardsContainer} flex`}>
            <div className={`${styles.growthCard} flex`}>
              <span>Token name</span>
              <button>DLICOM</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Ticker Symbol</span>
              <button>DLI</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Total Supply</span>
              <button>700,000,000</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Token ICO Distribution</span>
              <button>490,000,000</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Total Locked</span>
              <button>210,000,000</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Starting Price ICO</span>
              <button>USD 0.10</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Fundraising Goal</span>
              <button>USD 49M</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Minimum Purchase</span>
              <button>1000 DLI</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dliAllocationSection}>
        <div className={`${styles.container} flex`}>
          <div className={styles.textContainer}>
            <h1>Dlicom Token Allocation</h1>
          </div>
          <div className={`${styles.dliAllocationCard} flex`}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.dliAllocationImg}
                src="/bubbles.png"
                alt="img"
                width={500}
                height={400}
                priority
              />
            </div>
            <div className={`${styles.cardTextContainer} flex`}>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>700M</h1>
                <p>Total Supply</p>
              </div>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>490M</h1>
                <p>Distrubtion</p>
              </div>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>210M</h1>
                <p>Locked</p>
              </div>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>3500+</h1>
                <p>Investors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.stackAndEarnSection}>
        <div className={`${styles.container} flex`}>
          <h1>Stake and Earn</h1>
          <p>
            To combat the increasing trend of centralized control over social
            media platforms, DLICOM APP may provide a censorship-resistant
            alternative by employing a decentralized network such as a
            blockchain.
          </p>
          <Link href="/stakeAndEarn" className={styles.stackAndEarnlink}>
            <button className={styles.stackAndEarnBtn}>More Details</button>
          </Link>
        </div>
      </div>

      <div className={styles.solutionsSection}>
        <h3>Dlicom Application</h3>

        <h1 className={styles.solutionsTitle}>Solutions</h1>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.leftCardsContainer} flex`}>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/solutionscard1.jpg"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Centralized Control</h1>
                <p>
                  To combat the increasing trend of centralized control over
                  social media , DLICOM APP may provide a censorship-resistant
                  alternative by employing a decentralized network such as a
                  blockchain.
                </p>
              </div>
            </div>

            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/solutionscard2.jpg"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Lack of control over digital Assets</h1>
                <p>
                  Issues with third-party intervention when transacting digital
                  assets could be mitigated by DLICOM's usage of a distributed
                  ledger technology (such as a blockchain) to facilitate direct
                  user-to-user transactions.
                </p>
              </div>
            </div>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/firstCard.png"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>All in ONE!</h1>
                <p>
                  Issues arising from the need to switch between several apps
                  and websites to do various cryptocurrency-related tasks:
                  DLICOM APP's potential convenience stems from the fact that it
                  consolidates a user's social networking, messaging, and
                  trading needs into a single platform.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.rightCardsContainer} flex`}>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/secondCard.png"
                  alt="img"
                  width={2123}
                  height={1592}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>ECO SYSTEM</h1>
                <p>
                  DLICOM App may assist to unify the disparate parts of the
                  cryptocurrency sector by integrating previously separate
                  services like social networking, messaging, and trading.
                </p>
              </div>
            </div>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/thirdCard.png"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Exchange</h1>
                <p>
                  Cryptocurrency trading can be confusing, but this application
                  may make it simpler by connecting users to many markets and
                  streamlining the process with an intuitive design.
                </p>
              </div>
            </div>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/fourthCard.png"
                  alt="img"
                  width={6000}
                  height={2000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Privacy</h1>
                <p>
                  By incorporating blockchain technology, DLICOM will be able to
                  provide further privacy protections, including message-level
                  encryption and anonymous user profiles based on
                  Ethereum network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ourTeamSection}>
        <h1 className={styles.ourTeamTitle}>Meet Our Team</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={`${styles.imgContainer}`}>
              <Image
                className={styles.ourTeamImg}
                src="/chairman.png"
                alt="img"
                width={100}
                height={100}
                priority
              />
            </div>
            <h3 className={styles.memberName}>Mohammad Qadriah</h3>
            <p className={styles.aboutmember}>Chairman & Co-Founder</p>
            <a
              href="https://www.linkedin.com/in/qadriah/"
              className={styles.ourTeamsocial}
              target="_blank"
            >
              <FaLinkedin className={styles.linkedin} />
            </a>
          </div>
          <div className={styles.card}>
            <div className={`${styles.imgContainer}`}>
              <Image
                className={styles.ourTeamImg}
                src="/sheriff.jpg"
                alt="img"
                width={1000}
                height={500}
                priority
              />
            </div>
            <h3 className={styles.memberName}>Mohamed Alsherif</h3>
            <p className={styles.aboutmember}>Community Manager </p>
            <a className={styles.ourTeamsocial} target="_blank">
              <FaLinkedin className={styles.linkedin} />
            </a>
          </div>
          <div className={styles.card}>
            <div className={`${styles.imgContainer}`}>
              <Image
                className={styles.ourTeamImg}
                src="/George.png"
                alt="img"
                width={100}
                height={100}
                priority
              />
            </div>
            <h3 className={styles.memberName}>George Chahine</h3>
            <p className={styles.aboutmember}>Head of Tokenomics</p>
            <a
              href="https://www.linkedin.com/in/george-chahine-550a26240/"
              className={styles.ourTeamsocial}
              target="_blank"
            >
              <FaLinkedin className={styles.linkedin} />
            </a>
          </div>
          <div className={styles.card}>
            <div className={`${styles.imgContainer}`}>
              <Image
                className={styles.ourTeamImg}
                src="/Jimish.png"
                alt="img"
                width={500}
                height={500}
                priority
              />
            </div>
            <h3 className={styles.memberName}>Jimish Parekh</h3>
            <p className={styles.aboutmember}>CTO</p>
            <a
              href="https://www.linkedin.com/in/jimishio/"
              className={styles.ourTeamsocial}
              target="_blank"
            >
              <FaLinkedin className={styles.linkedin} />
            </a>
          </div>
          <div className={styles.card}>
            <div className={`${styles.imgContainer}`}>
              <Image
                className={styles.ourTeamImg}
                src="/Ahmed.png"
                alt="img"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <h3 className={styles.memberName}>Ahmed Omar</h3>
            <p className={styles.aboutmember}>Product Manager</p>
            <a
              href="https://www.linkedin.com/in/ahmed-omar-71b99bb/"
              className={styles.ourTeamsocial}
              target="_blank"
            >
              <FaLinkedin className={styles.linkedin} />
            </a>
          </div>
        </div>
      </div>

      <Faq />

      <div className={styles.partnersSection}>
        <h1 className={styles.partnersTitle}>Partners & Smart Contract API</h1>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.contentContainer} flex`}>
            <Marquee
              fade={true}
              direction="left"
              pauseOnHover={true}
              className={`${styles.marquee} `}
              sp
            >
              <div className={`${styles.imgContainer} ${styles.dLIComllogo}`}>
                <Image
                  className={styles.solutionsImg}
                  src="/dLIComllogo.webp"
                  alt="img"
                  width={2000}
                  height={2100}
                  priority
                />
              </div>

              <div className={`${styles.imgContainer} ${styles.partnerImg2}`}>
                <Image
                  className={styles.solutionsImg}
                  src="/partnerImg2.png"
                  alt="img"
                  width={1000}
                  height={800}
                  priority
                />
              </div>
              <div
                className={`${styles.imgContainer} ${styles.logoshlenPower}`}
              >
                <Image
                  className={styles.solutionsImg}
                  src="/logoshlenPower1.png"
                  alt="img"
                  width={1000}
                  height={800}
                  priority
                />
              </div>
              <div className={`${styles.imgContainer} ${styles.DarkMode3}`}>
                <Image
                  className={styles.solutionsImg}
                  src="/DarkMode3.png"
                  alt="img"
                  width={1000}
                  height={800}
                  priority
                />
              </div>
              <div className={`${styles.imgContainer} ${styles.partnerImg}`}>
                <Image
                  className={styles.solutionsImg}
                  src="/partnerImg.png"
                  alt="img"
                  width={1000}
                  height={800}
                  priority
                />
              </div>
              <div className={`${styles.imgContainer} ${styles.zeeve}`}>
                <Image
                  className={styles.solutionsImg}
                  src="/zeev.svg"
                  alt="img"
                  width={1500}
                  height={1200}
                  priority
                />
              </div>
           
                    <div className={`${styles.imgContainer} ${styles.zeeve}`}>
                <Image
                  className={styles.solutionsImg}
                  src="/aca.png"
                  alt="img"
                  width={1500}
                  height={1200}
                  priority
                />
              </div>
                    
                    
                    
                    
            </Marquee>
          </div>
        </div>
      </div>

      <Email />
    </div>
  );
}
