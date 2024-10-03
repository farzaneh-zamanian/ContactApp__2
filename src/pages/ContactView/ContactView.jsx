import styles from "./ContactView.module.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactsProvider from "../../context/ContactsProvider";

function ContactView() {
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
