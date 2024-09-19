import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Stay connected with the people who matter</h1>
        <NavLink to="/contacts">
          <button className="cta">Get Started</button>
        </NavLink>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Discover the power of a phone book</h2>
        <div className="grid">
          {/* Feature 1 */}
          <div className="feature boxShadow">
            <i className="material-icons">search</i>
            <h3>Quick Search</h3>
            <p>Find contacts fast</p>
            <button className="cta">Learn More</button>
          </div>

          {/* Feature 2 */}
          <div className="feature boxShadow">
            <i className="material-icons">folder</i>
            <h3>Organize Contacts</h3>
            <p>Keep your contacts tidy</p>
            <button className="cta">Learn More</button>
          </div>

          {/* Feature 3 */}
          <div className="feature boxShadow">
            <i className="material-icons">cloud</i>
            <h3>Backup & Sync</h3>
            <p>Never lose a contact again</p>
            <button className="cta">Learn More</button>
          </div>

          {/* Feature 4 */}
          <div className="feature boxShadow">
            <i className="material-icons">phone</i>
            <h3>Smart Dialer</h3>
            <p>Make calls with ease</p>
            <button className="cta">Learn More</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
