import React, { useEffect, useRef, useState } from "react";
import inputs from "../../constants/inputs";
import styles from "./ContactForm.module.css";
import { validateInput } from "../../constants/inputsValidation";
import useContactsContext from "../../hook/useContactsContext";

function ContactForm() {
  // CONTEXT
  const { dispatch, addContactHandler, clearAlertAndError } =
    useContactsContext();
  // STATE - validation
  const [errors, setErrors] = useState({
    name: "",
    family: "",
    email: "",
    telephone: "",
  });

  //  -  new contact info
  const [contact, setContact] = useState({
    name: "",
    family: "",
    email: "",
    telephone: "",
    description: "",
  });

  // useRef
  const refInput = useRef(null);
  // USEEFFECT
  useEffect(() => {
    refInput.current.focus();
  }, []);

  // ACTION - handle inputs value and errors
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // call validation
    const error = validateInput(name, value);
    setErrors((errors) => ({ ...errors, [name]: error })); //errors
    setContact((contact) => ({ ...contact, [name]: value })); //values
  };

  // handle submit button
  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      // if inputs are empty
      !contact.name ||
      !contact.family ||
      !contact.email ||
      !contact.telephone ||
      // if data is invalid in inputs
      errors.name ||
      errors.family ||
      errors.email ||
      errors.telephone
    ) {
      dispatch({
        type: "SET_ALERT_MESSAGE",
        payload: "Please enter valid data",
      });
      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");

      return;
    } else {
      addContactHandler(contact);
      setContact({
        name: "",
        family: "",
        email: "",
        telephone: "",
        description: "",
      });
      // reset the errors
      setErrors({
        name: "",
        family: "",
        email: "",
        telephone: "",
      });
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
            <div className={styles.inputErrors}>
              <input
                key={index}
                type={input.type}
                name={input.name}
                ref={input.name === "name" ? refInput : null}
                placeholder={input.placeholder}
                value={contact[input.name]}
                onChange={changeHandler}
              />
              <div style={{ width: "100%", height: "0.5rem" }}>
                {errors[input.name] && (
                  <span style={{ color: "red" }}>{errors[input.name]}</span>
                )}
              </div>
            </div>
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
