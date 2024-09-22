import React, { useState } from "react";
import inputs from "../../constants/inputs";
import styles from "./ContactForm.module.css";
import { validateInput } from "../../constants/inputsValidation";
import { api } from "../../services/config";
import { useContacts } from "../../context/ContactsProvider";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    telephone: "",
    description: "",
  });

  // handle inputs changes and validation
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  // submit handler function
  const submitHandler = async (event) => {
    event.preventDefault();
    // Add the contact info to the mockData.json file using Axios
    try {
      const response = await api.post("/contacts",contact);
      setContact({
        id: "",
        name: "",
        lastName: "",
        email: "",
        telephone: "",
        description: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.container}>
        {inputs.map((input, index) =>
          input.type === "textarea" ? (
            <textarea
              key={index}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ) : (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          )
        )}

        <button type="submit" className={styles.addBtn}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
