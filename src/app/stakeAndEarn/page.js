import React from "react";
import styles from "./DlicomStaking.module.css";
import TealSection from "../Components/TealSection/TealSection";

function page() {
  return (
    <div>
        {/* <TealSection title="Stake And Earn" /> */}
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Dlicom Revenue Staking: Step-by-Step</h1>
        </header>
        <section className={styles.content}>
          <div className={styles.section}>
            <h2>What is Dlicom Staking for Revenue?</h2>
            <p>
              Run with Earnings; Dlicom Staking for Revenue involves holding and
              staking (locking) your Dlicom tokens, making them work for you in
              the same way you would with a savings account.
            </p>
          </div>
          <div className={styles.section}>
            <h2>How does it Work?</h2>
            <ol>
              <li>
                <h3>Staking Your Tokens</h3>
                <p>
                  You have Dlicom tokens and you decide to do staking through
                  our website. Staking locks your tokens for some time;
                  therefore, during the time they are locked in, you cannot sell
                  them or use them for something else.
                </p>
              </li>
              <li>
                <h3>Earning Rewards</h3>
                <p>
                  Instead of earning interest in more Dlicom tokens, you earn in
                  USDT—a stable digital currency you can redeem and exchange for
                  the US dollar at 1:1. These incentives are paid out by a USDT
                  pool that we keep on refilling and distributing again among
                  all stakers.
                </p>
              </li>
              <li>
                <h3>Claiming Your Rewards</h3>
                <p>
                  Earn rewards on Dlicom on an hourly basis based on the amount
                  of Dlicom tokens you have staked and the duration you stake
                  for. The rewards are claimed after any duration by just
                  clicking the claim button on our website, although you will
                  have to pay a small transaction fee, which we can discuss
                  further.
                </p>
              </li>
            </ol>
          </div>
          <div className={styles.section}>
            <h2>Staking in Simple Steps</h2>
            <ol>
              <li>
                <h3>Fund Wallet & Contract</h3>
                <p>
                  We issue a special wallet monthly with USDT. It is accompanied
                  by a smart contract, which is an automated digital agreement,
                  disbursing USDT to those who stake.
                </p>
              </li>
              <li>
                <h3>Dispersion of Rewards</h3>
                <p>
                  USDT in the smart contract is distributed every single hour.
                  The entire number of USDT obtainable depends on both what
                  number was staked and the duration for which the resulting
                  amount was staked. The more the number of tokens and the
                  longer the staking periods, the higher the rewards.
                </p>
              </li>
              <li>
                <h3>Staking Periods</h3>
                <p>
                  You specify the duration for which you will stake your tokens:
                  either flexible, one week, one month, three months, six
                  months, one year, three years, or five years. The longer the
                  staking periods with the higher multipliers, hence more
                  rewards accrued. In the event of token pre-release, 2% of the
                  tokens will be burned down, meaning they will be randomly
                  destroyed.
                </p>
              </li>
            </ol>
          </div>
          <div className={styles.section}>
            <h2>Salary Example</h2>
            <p>
              Now let's consider two investors, Alice and Bob. Alice wagers 10
              tokens for a week, while Bob wagers 40 tokens for half a year.
            </p>
            <ul>
              <li>
                We will have a 3000 USDT funding smart contract for the month.
              </li>
              <li>
                The USDT is minted by the smart contract through a continuous
                hourly means to the stakers.
              </li>
            </ul>
            <h3>Alice's Income</h3>
            <p>
              Alice's effect = 10 tokens × 1.2 (multiplier for 1 week) = 12
              <br />
              Effectiveness of Bob = 40 tokens × 3.5 (weighted score of 6
              months) = 140
              <br />
              Overall impact = 12 + 140 = 152
              <br />
              Total hourly prizes = 3000 USDT / 1500 hours = 2 USDT per hour
              <br />
              Alice's share = 12/152 × 2 USDT = 0.157 USDT per hour
            </p>
            <h3>Bob's Earnings</h3>
            <p>Bob's share = 140/152 × 2 USDT = 1.843 USDT per hour</p>
          </div>
          <div className={styles.section}>
            <h2>Claiming Your Rewards</h2>
            <p>
              Claim whatever you've earned on whatever schedule by simply
              connecting your wallet to our website and clicking the claim
              button. The rewards will be transferred to your wallet after a gas
              fee for the transaction.
            </p>
          </div>
          <div className={styles.section}>
            <h2>Other Advantages</h2>
            <ul>
              <li>
                Governance: This also lets you further decide how Dlicom will
                develop its platform by staking your token. The more and longer
                the tokens you stake, the more your voting power.
              </li>
              <li>
                Transparency: Everything is run by clear and secure smart
                contracts to make sure rewards are distributed within the rules.
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2>Conclusion</h2>
            <p>
              About Dlicom Staking With Respect to Revenue, it is easy and
              simple to earn more from your Dlicom tokens. You will be in a
              position to earn USDT while your tokens are staked, and you will
              also have a voice regarding the governance of the Dlicom platform.
              Now, start staking and let your tokens work for you. If you have
              any questions or encounter problems getting started, you can
              always contact our support team for assistance from day one.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
