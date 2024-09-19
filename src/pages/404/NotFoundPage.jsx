import React from "react";
import styles from "./NotFoundPage.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/404Page.jpg";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <img src={img} alt="404 Image" className={styles.image} />
      <NavLink to="/">
        <button className={styles.button}>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
