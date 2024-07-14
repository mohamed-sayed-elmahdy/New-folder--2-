import React from "react";
import styles from "./decentralization.module.css";

function page() {
  return (
    <div>
      <div className={styles.whatIsdecentralization}>
        <h1 className={styles.whatIsTitle}>
          What is decentralization In Blockchain?
        </h1>
        <p className={styles.whatIsParagraph}>
          In blockchain, decentralization refers to the transfer of control and
          decision-making from a centralized entity (individual, organization,
          or group thereof) to a distributed network. Decentralized networks
          strive to reduce the level of trust that participants must place in
          one another, and deter their ability to exert authority or control
          over one another in ways that degrade the functionality of the
          network.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>Why decentralization matters</h2>
        <p className={styles.content}>
          Decentralization is not a new concept. When building a technology
          solution, three primary network architectures are typically
          considered: centralized, distributed, and decentralized. While
          blockchain technologies often make use of decentralized networks, a
          blockchain application itself cannot be categorized simply as being
          decentralized or not. Rather, decentralization is a sliding scale and
          should be applied to all aspects of a blockchain application. By
          decentralizing the management of and access to resources in an
          application, greater and fairer service can be achieved.
          Decentralization typically has some tradeoffs such as lower
          transaction throughput, but ideally, the tradeoffs are worth the
          improved stability and service levels they produce.
        </p>
        <h2 className={styles.subtitle}>Benefits of decentralization</h2>
        <ul className={styles.content}>
          <li>
            <strong>Provides a trustless environment:</strong> In a
            decentralized blockchain network, no one has to know or trust anyone
            else. Each member in the network has a copy of the exact same data
            in the form of a distributed ledger. If a member’s ledger is altered
            or corrupted in any way, it will be rejected by the majority of the
            members in the network.
          </li>
          <li>
            <strong>Improves data reconciliation:</strong> Companies often
            exchange data with their partners. This data, in turn, is typically
            transformed and stored in each party’s data silos, only to resurface
            when it needs to be passed downstream. Each time the data is
            transformed, it opens up opportunities for data loss or incorrect
            data to enter the workstream. By having a decentralized data store,
            every entity has access to a real-time, shared view of the data.
          </li>
          <li>
            <strong>Reduces points of weakness:</strong> Decentralization can
            reduce points of weakness in systems where there may be too much
            reliance on specific actors. These weak points could lead to
            systemic failures, including failure to provide promised services or
            inefficient service due to the exhaustion of resources, periodic
            outages, bottlenecks, lack of sufficient incentives for good
            service, or corruption.
          </li>
          <li>
            <strong>Optimizes resource distribution:</strong> Decentralization
            can also help optimize the distribution of resources so that
            promised services are provided with better performance and
            consistency, as well as a reduced likelihood of catastrophic
            failure.
          </li>
        </ul>
        <h2 className={styles.subtitle}>How decentralization compares</h2>
        <p className={styles.content}>
          Decentralization should be applied where it makes sense. Just because
          it’s a blockchain application doesn’t mean it needs to be 100%
          decentralized. The goal of any blockchain solution is to deliver what
          the users of that solution need, and this may or may not include
          certain levels of decentralization. To better understand decentralized
          networks, the table below breaks out how decentralized networks
          compare to the more common centralized and distributed networks.
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Centralized</th>
                <th>Distributed</th>
                <th>Decentralized</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Network/hardware resources</td>
                <td>
                  Maintained & controlled by single entity in a centralized
                  location
                </td>
                <td>
                  Spread across multiple data centers & geographies; owned by
                  network provider
                </td>
                <td>
                  Resources are owned & shared by network members; difficult to
                  maintain since no one owns it
                </td>
              </tr>
              <tr>
                <td>Solution components</td>
                <td>Maintained & controlled by central entity</td>
                <td>Maintained & controlled by solution provider</td>
                <td>Each member has exact same copy of distributed ledger</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Maintained & controlled by central entity</td>
                <td>Typically owned & managed by customer</td>
                <td>Only added through group consensus</td>
              </tr>
              <tr>
                <td>Control</td>
                <td>Controlled by central entity</td>
                <td>
                  Typically, a shared responsibility between network provider,
                  solution provider & customer
                </td>
                <td>No one owns the data & everyone owns the data</td>
              </tr>
              <tr>
                <td>Single Point of Failure</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Fault tolerance</td>
                <td>Low</td>
                <td>High</td>
                <td>Extremely high</td>
              </tr>
              <tr>
                <td>Security</td>
                <td>Maintained & controlled by central entity</td>
                <td>
                  Typically, a shared responsibility between network provider,
                  solution provider & customer
                </td>
                <td>Increases as # of network members increase</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Maintained & controlled by central entity</td>
                <td>
                  Increases as network/hardware resources scale up and out
                </td>
                <td>Decreases as # of network members increase</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>ERP system</td>
                <td>Cloud computing</td>
                <td>Blockchain</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.content}>
          Each network architecture has its benefits and tradeoffs. For example,
          decentralized blockchain systems, unlike distributed systems,
          typically prioritize security over performance. So, when a blockchain
          network scales up or out, the network becomes more secure, but
          performance slows down because each member node must validate all data
          being added to the ledger. Adding members to a decentralized network
          can make it safer, but not necessarily faster.
        </p>
        <h2 className={styles.subtitle}>
          Who is building blockchain applications leveraging decentralization
        </h2>
        <p className={styles.content}>
          Every blockchain protocol, decentralized Application (dApp),
          Decentralized Autonomous Organization (DAO), or other
          blockchain-related solution adopts varying levels of decentralization.
          The adoption level is typically based on the maturity of the solution,
          the time-proven reliability of its incentive models and consensus
          mechanisms, and the ability of the founding team to strike the right
          balance. For example, many DAOs have various components at different
          stages of decentralization: oracles (i.e., third-party services that
          provide smart contracts with external information) may be partly
          decentralized, smart contracts might be fully centralized, while the
          governance process for adjusting parameters is community-driven and
          decentralized.
        </p>
        <p className={styles.content}>
          On a broader scale, decentralized blockchain solutions are being
          explored and adopted by organizations of every type, size, and
          industry. Some notable examples include applications that provide
          immediate foreign or emergency aid to those who need it most, without
          the mediation of a bank, government or third-party entity. Or
          applications that give people the ability to manage their own digital
          identities and data. Today, social media platforms, companies, and
          other organizations sell this information without the individual
          seeing any benefit. A decentralized approach would help make it
          equitable for all.
        </p>
        <h2 className={styles.subtitle}>A real-world example</h2>
        <p className={styles.content}>
          Contura Energy, a leading U.S.-based coal supplier, has depended on an
          outdated letters of credit system to manage its international trade
          payments. These letters of credit, issued by an intermediary bank on
          behalf of its client, serve as a guarantee of payment for buyers.
          While this system is trustworthy, it’s also manually driven, slow, and
          highly inefficient.
        </p>
        <p className={styles.content}>
          Contura Energy understands the importance and value of digitizing and
          automating their letters of credit process. The challenge they face,
          however, is enabling mutual trust and verification between sellers and
          buyers. They are working with AWS on a decentralized, blockchain-based
          innovation that provides a more efficient, cost saving, and less risky
          system to manage international trade payments. This decentralized
          solution also increases transparency, giving all parties real-time
          visibility into the data and documentation.
        </p>
      </div>
    </div>
  );
}

export default page;
