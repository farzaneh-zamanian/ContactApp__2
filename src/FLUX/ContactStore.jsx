// import { EventEmitter } from 'events';
// import ContactDispatcher from './ContactDispatcher';
// import ContactActions from './ContactActions';
// import api from '../services/config';

// class ContactStore extends EventEmitter {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       error: null,
//       data: [],
//       alertMessage: null,
//     };
//   }

//   handleFetchContacts() {
//     this.setState({ isLoading: true });
//     api.get('/contacts/')
//       .then((response) => {
//         this.setState({ isLoading: false, data: response.data });
//         this.emitChange();
//       })
//       .catch((error) => {
//         this.setState({ isLoading: false, error: error.message });
//         this.emitChange();
//       });
//   }

//   handleAddContact(contact) {
//     api.post('/contacts/', contact)
//       .then((response) => {
//         this.setState({ data: [...this.state.data, response.data] });
//         this.emitChange();
//       })
//       .catch((error) => {
//         this.setState({ error: error.message });
//         this.emitChange();
//       });
//   }

//   handleDeleteContact(id) {
//     api.delete(`/contacts/${id}`)
//       .then(() => {
//         this.setState({ data: this.state.data.filter((contact) => contact.id !== id) });
//         this.emitChange();
//       })
//       .catch((error) => {
//         this.setState({ error: error.message });
//         this.emitChange();
//       });
//   }

//   handleUpdateContact(contact) {
//     api.put(`/contacts/${contact.id}`, contact)
//       .then((response) => {
//         this.setState({ data: this.state.data.map((c) => (c.id === contact.id ? response.data : c)) });
//         this.emitChange();
//       })
//       .catch((error) => {
//         this.setState({ error: error.message });
//         this.emitChange();
//       });
//   }

//   handleSearchContacts(searchValue) {
//     const searchedContacts = this.state.data.filter(
//       (contact) =>
//         contact.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
//         contact.family?.toLowerCase().includes(searchValue?.toLowerCase()) ||
//         contact.email?.toLowerCase().includes(searchValue?.toLowerCase())
//     );
//     this.setState({ data: searchedContacts });
//     this.emitChange();
//   }

//   emitChange() {
//     this.emit('change');
//   }

//   addChangeListener(callback) {
//     this.on('change', callback);
//   }

//   removeChangeListener(callback) {
//     this.removeListener('change', callback);
//   }

//   getState() {
//     return this.state;
//   }
// }

// const contactStore = new ContactStore();
// ContactDispatcher.register(contactStore.handleAction.bind(contactStore));

// export default contactStore;