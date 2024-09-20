import contactData from "../../constants/mockData.json";
import styles from "./ContactView.module.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
function ContactView() {
  return (
    <div className={`${styles.container} boxShadow`}>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default ContactView;
