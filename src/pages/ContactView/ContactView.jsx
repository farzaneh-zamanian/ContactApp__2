import styles from "./ContactView.module.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactsProvider from "../../context/ContactsProvider";
import { useEffect } from "react";
import { useTitle } from "../../hook/useTitle";

function ContactView() {
 
  useTitle("Contact Page")
  return (
    <ContactsProvider>
      <div className={`${styles.container} boxShadow`}>
        <ContactForm />

        <ContactList />
      </div>
    </ContactsProvider>
  );
}

export default ContactView;
