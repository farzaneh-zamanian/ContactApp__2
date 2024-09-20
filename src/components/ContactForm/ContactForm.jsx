import React from "react";
import inputs from "../../constants/inputs";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.container}>
      {inputs.map((input) => (
        <input
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      <button className={styles.addBtn}>Add contact</button>
    </div>
  );
}

export default ContactForm;
