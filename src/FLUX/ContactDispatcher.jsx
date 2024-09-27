// // import { Dispatcher } from 'flux';
// // import { Dispatcher } from '../node_modules/flux';
// // import ContactActions from './ContactActions';

// const ContactDispatcher = new Dispatcher();

// ContactDispatcher.register((action) => {
//   switch (action.type) {
//     case ContactActions.FETCH_CONTACTS:
//       ContactStore.handleFetchContacts();
//       break;
//     case ContactActions.ADD_CONTACT:
//       ContactStore.handleAddContact(action.contact);
//       break;
//     case ContactActions.DELETE_CONTACT:
//       ContactStore.handleDeleteContact(action.id);
//       break;
//     case ContactActions.UPDATE_CONTACT:
//       ContactStore.handleUpdateContact(action.contact);
//       break;
//     case ContactActions.SEARCH_CONTACTS:
//       ContactStore.handleSearchContacts(action.searchValue);
//       break;
//     default:
//       throw new Error(`Unknown action type: ${action.type}`);
//   }
// });

// export default ContactDispatcher;