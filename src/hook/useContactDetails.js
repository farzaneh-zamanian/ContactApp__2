import { useContext } from "react";
import { ContactsContext } from "../context/ContactsProvider";

const useContactDetails = (id) => {
      const {state} = useContext(ContactsContext);
      console.log(state)
      const findedContact = state.data.find(contact => contact.id === id)
      return findedContact

}

export default useContactDetails