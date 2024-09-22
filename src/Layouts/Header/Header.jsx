import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Contact App</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="favoriteContacts">favContacts</NavLink>
          </li>
        </ul>
      </nav>

      <p>React js Course</p>
    </header>
  );
}

export default Header;
