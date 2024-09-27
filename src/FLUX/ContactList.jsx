// import React, { useState, useEffect } from 'react';
// import ContactStore from './ContactStore';
// import ContactActions from './ContactActions';

// function ContactList() {
//   const [contacts, setContacts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchValue, setSearchValue] = useState('');

//   useEffect(() => {
//     ContactStore.addChangeListener(() => {
//       setContacts(ContactStore.getState().data);
//       setIsLoading(ContactStore.getState().isLoading);
//     });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchValue(e.target.value);
//     ContactActions.searchContacts(e.target.value);
//   };

//   const handleAddContact = () => {
//     const contact = {
//       name: 'John Doe',
//       family: 'Doe',
//       email: 'john.doe@example.com',
//     };
//     ContactActions.addContact(contact);
//   };

//   const handleDeleteContact = (id) => {
//     ContactActions.deleteContact(id);
//   };

//   const handleUpdateContact = (contact) => {
//     ContactActions.updateContact(contact);
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <input
//             type="text"
//             value={searchValue}
//             onChange={handleSearch}
//             placeholder="Search contacts"
//           />
//           <button onClick={handleAddContact}>Add Contact</button>
//           <ul>
//             {contacts.map((contact) => (
//               <li key={contact.id}>
//                 {contact.name} {contact.family} ({contact.email})
//                 <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
//                 <button onClick={() => handleUpdateContact(contact)}>Update</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactList;