import React from "react";
import inputs from "../../constants/inputs";
import styles from "./ContactForm.module.css";

function ContactForm() {
  console.log(inputs);
  return (
    <>
      <div className={styles.container}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
          />
        ))}
        <button className={styles.addBtn}>Add contact</button>
      </div>
    </>
  );
}

export default ContactForm;
