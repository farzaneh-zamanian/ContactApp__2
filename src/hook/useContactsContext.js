import { useContext } from "react"
import { ContactsContext } from "../context/ContactsProvider";


// CREATE CUSTOME HOOK FOR CONTEXT PROVIDER

const useContactsContext = () => {
      // const contacts = useContext(ContactsContext);
      // return contacts;
      return useContext(ContactsContext);

}

export default useContactsContext