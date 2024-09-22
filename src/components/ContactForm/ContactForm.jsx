import React, { useState } from "react";
import inputs from "../../constants/inputs";
import styles from "./ContactForm.module.css";
import { validateInput } from "../../constants/inputsValidation";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    telephone: "",
    description: "",
  });

  return (
    <>
      <div className={styles.container}>
        {inputs.map((input, index) =>
          input.type === "textarea" ? (
            <textarea
              key={index}
              name={input.name}
              placeholder={input.placeholder}
            />
          ) : (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              // value={}
            />
          )
        )}
        <button className={styles.addBtn}>Add contact</button>
      </div>
    </>
  );
}

export default ContactForm;
