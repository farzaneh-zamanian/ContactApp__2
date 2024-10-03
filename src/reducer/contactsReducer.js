import { addContactActionCreator, alertMessageActionCreator, errorMessageActionCreator } from "../actions/contacts";



// REDUCER FUNCTION OF useReducer
const contactsReducer = (state, action) => {
      switch (action.type) {

            //ALERT
            case alertMessageActionCreator().type:
                  return { ...state, alertMessage: action.payload };
            //ERROR
            case errorMessageActionCreator().type:
                  return { ...state, error: action.payload };

            //FETCH DATA
            case "FETCH_CONTACTS":
                  return { ...state, isLoading: true };
            case "FETCH_CONTACTS_SUCCESS":
                  return { ...state, isLoading: false, data: action.payload };
            case "FETCH_CONTACTS_FAILED":
                  return { ...state, isLoading: false, error: action.payload };
            case "SET_LOADING":
                  return { ...state, isLoading: action.payload };
            // ADD CONTACT
            case addContactActionCreator().type:
                  return {
                        ...state,
                        data: [...state.data, action.payload],
                        isLoading: false,
                  };
            case "ADD_CONTACT_FAILURE":
                  return { ...state, error: action.payload, isLoading: false };
            //DELETE CONTACT
            case "DELETE_CONTACT_SUCCESS":
                  return {
                        ...state,
                        data: state.data.filter((contact) => contact.id !== action.payload),
                  };
            //EDIT CONTACT
            case "UPDATE_CONTACT_SUCCESS":
                  return {
                        ...state,
                        data: state.data.map((contact) =>
                              contact.id === action.payload.id ? action.payload : contact
                        ),
                  };
            //SEARCH CONTACT
            case "SEARCH_CONTACTS":
                  return { ...state, data: action.payload };
            //DELETE SELECTED CONTACTS
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

export default contactsReducer