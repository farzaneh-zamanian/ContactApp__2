import React from "react";
import styles from"./HomePage.module.css"
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Stay connected with the people who matter</h1>
        <NavLink to="/contacts" >
          <button className={styles.cta}>Get Started</button>
        </NavLink>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.grid}>
          {/* Feature 1 */}
          <div className={`${styles.feature} boxShadow` } >
            <i className={styles.materialIcons}>search</i>
            <h3>Quick Search</h3>
            <p>Find contacts fast</p>
            <button className={styles.cta}>Learn More</button>
          </div>

          {/* Feature 2 */}
          <div  className={`${styles.feature} boxShadow` } >
            <i className={styles.materialIcons}>folder</i>
            <h3>Organize Contacts</h3>
            <p>Keep your contacts tidy</p>
            <button className={styles.cta}>Learn More</button>
          </div>

          {/* Feature 3 */}
          <div  className={`${styles.feature} boxShadow` }>
            <i className={styles.materialIcons}>cloud</i>
            <h3>Backup & Sync</h3>
            <p>Never lose a contact again</p>
            <button className={styles.cta}>Learn More</button>
          </div>

          {/* Feature 4 */}
          <div  className={`${styles.feature} boxShadow` }>
            <i className={styles.materialIcons}>phone</i>
            <h3>Smart Dialer</h3>
            <p>Make calls with ease</p>
            <button className={styles.cta}>Learn More</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
