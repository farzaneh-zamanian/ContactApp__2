import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/config";

const ContactsContext = createContext();

function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoding] = useState(true);


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // const response = await api.get("/contacts/");
        // setContacts(response);
        setContacts(await api.get("/contacts/"));
        setIsLoding(!isLoading);
      } catch (error) {
        console.log(error.message);
      }
    };
    // Fetch contacts after 1 seconds to show skeleton loading
    setTimeout(fetchContacts, 1000);
  }, []);



  
  return (
    // provider - value
    <ContactsContext.Provider value={{ contacts, setContacts,isLoading, setIsLoding }}>
      {children}
    </ContactsContext.Provider>
  );
}

// consumer-create a custome hook
const useContacts = () => {
  const contacts = useContext(ContactsContext);
  return contacts;
};

export default ContactsProvider;
export { useContacts };
