import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { api } from "../services/config";

// Define the initial state
const initialState = {
  isLoading: false,
  error: null,
  data: [],
  alertMessage: null,
};

// Define the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return { ...state, isLoading: true };
    case "FETCH_CONTACTS_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "FETCH_CONTACTS_FAILED":
      return { ...state, isLoading: false, error: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "ADD_CONTACT_SUCCESS":
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case "ADD_CONTACT_FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    case "SET_ALERT_MESSAGE":
      return { ...state, alertMessage: action.payload };

    case "DELETE_CONTACT_SUCCESS":
      return {
        ...state,
        data: state.data.filter((contact) => contact.id !== action.payload),
      };

    case "SET_ERROR_MESSAGE":
      return { ...state, error: action.payload };

    case "UPDATE_CONTACT_SUCCESS":
      return {
        ...state,
        data: state.data.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case "SEARCH_CONTACTS":
      return { ...state, data: action.payload };

    case "DELETE_ALL_CONTACTS_SUCCESS":
      return { ...state, data: [] };

    case "DELETE_SELECTED_CONTACTS_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };

    default:
      throw new Error("Invalid Action");
  }
};

// Create the context
const ContactsContext = createContext({});

// ContactsProvider component
function ContactsProvider({ children }) {
  // State and dispatch
  const [editMode, setEditMode] = useState(false);
  const [favContacts, setfavContacts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = useState("Search Name or Family");

  // STATE - DELETE SELECTED CONTACT OR CONTACTS
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  // CLEAR ALERT AND ERROR
  const clearAlertAndError = (dispatch, message, time = 2000) => {
    setTimeout(() => {
      dispatch({ type: message, payload: null });
    }, time);
  };

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

  useEffect(() => {
    setTimeout(getContacts, 1000);
  }, []);

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

  // Create Contact
  const addContactHandler = async (contact) => {
    try {
      const response = await api.post("/contacts", contact);
      if (response.status === 201) {
        dispatch({ type: "ADD_CONTACT_SUCCESS", payload: response.data });
        dispatch({
          type: "SET_ALERT_MESSAGE",
          payload: "Contact added successfully!",
        });
        clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
      clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
    }
  };
  // Delete Contact
  const deleteContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      dispatch({ type: "DELETE_CONTACT_SUCCESS", payload: id });
      dispatch({
        type: "SET_ALERT_MESSAGE",
        payload: "Contact deleted successfully!",
      });
      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
      clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
    }
  };

  // Update Contact
  const editContactHandler = async (id, updatedContact) => {
    try {
      await api.put(`/contacts/${id}`, updatedContact);

      dispatch({ type: "UPDATE_CONTACT_SUCCESS", payload: updatedContact });
      dispatch({
        type: "SET_ALERT_MESSAGE",
        payload: "Contact updated successfully!",
      });
      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
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
            dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
            clearAlertAndError(dispatch, "SET_ERROR_MESSAGE");
          });
      });
      // 2

      dispatch({
        type: "DELETE_SELECTED_CONTACTS_SUCCESS",
        payload: filteredContacts,
      });

      dispatch({
        type: "SET_ALERT_MESSAGE",
        payload: "Contacts deleted successfully!",
      });

      clearAlertAndError(dispatch, "SET_ALERT_MESSAGE");
      dispatch({
        type: "DELETE_SELECTED_CONTACTS_SUCCESS",
        payload: filteredContacts,
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
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

  // favorite contacts list add to an array
  const faveContactsListHandler = (contact, status) => {
    if (status) {
      setfavContacts((prevFavContacts) => [...prevFavContacts, contact]);
    } else {
      setfavContacts((prevFavContacts) =>
        prevFavContacts.filter((item) => item.id !== contact.id)
      );
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
        favContacts,
        setfavContacts,
        faveContactsListHandler,
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

// consumer-create a custome hook
const useContacts = () => {
  const contacts = useContext(ContactsContext);
  return contacts;
};

export default ContactsProvider;
export { useContacts };
