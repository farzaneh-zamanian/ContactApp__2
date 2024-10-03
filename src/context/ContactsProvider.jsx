import { createContext, useEffect, useReducer, useState } from "react";
import { api } from "../services/config";
import contactsReducer from "../reducer/contactsReducer";
import {
  addContactActionCreator,
  alertMessageActionCreator,
  errorMessageActionCreator,
} from "../actions/contacts";

// REDUCER INITIAL
const initialState = {
  isLoading: false,
  error: null,
  data: [],
  alertMessage: null,
};

// CONTEXT
export const ContactsContext = createContext({});

//CONTEXT PROVIDER COMPONENT
function ContactsProvider({ children }) {
  // STATE
  const [editMode, setEditMode] = useState(false); //EDIT CONTACT INFO
  const [selectedContacts, setSelectedContacts] = useState([]); //DELETE SELECTED CONTACT OR CONTACTS
  const [selectAllChecked, setSelectAllChecked] = useState(false); //DELETE SELECTED CONTACT OR CONTACTS
  const [searchValue, setSearchValue] = useState("Search Name or Family"); //SEARCH CONTACTS
  //REDUCER
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  // ACTION - CLEAR ALERT AND ERROR
  const clearAlertAndError = (dispatch, message, time = 2000) => {
    setTimeout(() => {
      dispatch({ type: message, payload: null });
    }, time);
  };

  // ACTION - FETCH DATA
  useEffect(() => {
    const getContacts = async () => {
      dispatch({ type: "FETCH_CONTACTS" });
      try {
        const response = await api.get("/contacts/");
        dispatch({ type: "FETCH_CONTACTS_SUCCESS", payload: response.data });
        dispatch({ type: "SET_LOADING", payload: false }); // Add this line
      } catch (error) {
        dispatch({ type: "FETCH_CONTACTS_FAILED", payload: error.message });
        dispatch({ type: "SET_LOADING", payload: false }); // Add this line
      }
    };
    setTimeout(getContacts, 1000);
  }, []);

  //ACTION - SEARCH CONTACT
  useEffect(() => {
    if (!searchValue) return;
    else {
      const searchedContacts = state.data.filter(
        (contact) =>
          contact.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
          contact.family?.toLowerCase().includes(searchValue?.toLowerCase()) ||
          contact.email?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      dispatch({ type: "SEARCH_CONTACTS", payload: searchedContacts });
    }
  }, [searchValue]);

  // ACTION - ADD CONTACT
  const addContactHandler = async (contact) => {
    try {
      const response = await api.post("/contacts", contact);
      if (response.status === 201) {
        dispatch(addContactActionCreator(response.data));
        dispatch(alertMessageActionCreator("Contact added successfully!"));
        clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
      }
    } catch (error) {
      dispatch(errorMessageActionCreator(error.message));
      clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
    }
  };
  // ACTION - DELETE CONTACT
  const deleteContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      dispatch({ type: "DELETE_CONTACT_SUCCESS", payload: id });

      dispatch(alertMessageActionCreator("Contact deleted successfully!"));

      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
    } catch (error) {
      dispatch(errorMessageActionCreator(error.message));

      clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
    }
  };

  // Update Contact
  const editContactHandler = async (id, updatedContact) => {
    try {
      await api.put(`/contacts/${id}`, updatedContact);

      dispatch({ type: "UPDATE_CONTACT_SUCCESS", payload: updatedContact });   
      dispatch(alertMessageActionCreator("Contact updated successfully!"));
      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
    } catch (error) {
      dispatch(errorMessageActionCreator(error.message));

      clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
    }
  };
  // HANDLE CHECK BOX OF DELETE CONTACTS
  const handleSelectAll = () => {
    // whether the "Select All" checkbox is currently checked or not.
    // allows the user to select or deselect all contacts in the list
    if (selectAllChecked) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts([...state.data]);
    }
    setSelectAllChecked(!selectAllChecked);
  };

  const handleDelete = async () => {
    try {
      // 1
      const filteredContacts = state.data.filter(
        (contact) => !selectedContacts.includes(contact)
      );
      selectedContacts.forEach((contact) => {
        api
          .delete(`/contacts/${contact.id}`)
          .then((response) => {
            if (response.status === 200) {
              dispatch({
                type: "DELETE_CONTACT_SUCCESS",
                payload: contact,
              });
            }
          })
          .catch((error) => {
            // dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
            dispatch(errorMessageActionCreator(error.message));

            clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
          });
      });
      // 2

      dispatch({
        type: "DELETE_SELECTED_CONTACTS_SUCCESS",
        payload: filteredContacts,
      });

      dispatch(alertMessageActionCreator("Contacts deleted successfully!"));

      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
      dispatch({
        type: "DELETE_SELECTED_CONTACTS_SUCCESS",
        payload: filteredContacts,
      });
    } catch (error) {
      dispatch(errorMessageActionCreator(error.message));

      clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
    }
  };
  //HANDLE CHECK BOX OF EACH CONTACT INDIVISUALLY
  const handleSelect = (contact) => {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  return (
    // provider - value
    <ContactsContext.Provider
      value={{
        state,
        dispatch,
        editMode,
        setEditMode,
        addContactHandler,
        deleteContactHandler,
        editContactHandler,
        searchValue,
        setSearchValue,
        selectedContacts,
        setSelectedContacts,
        selectAllChecked,
        setSelectAllChecked,
        handleSelectAll,
        handleDelete,
        handleSelect,
        clearAlertAndError,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;
