// import React, { useState } from 'react';
// import ContactActions from './ContactActions';

// function UpdateContactForm({ contact }) {
//   const [name, setName] = useState(contact.name);
//   const [family, setFamily] = useState(contact.family);
//   const [email, setEmail] = useState(contact.email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedContact = {
//       id: contact.id,
//       name,
//       family,
//       email,
//     };
//     ContactActions.updateContact(updatedContact);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Family:
//         <input type="text" value={family} onChange={(e) => setFamily(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Update Contact</button>
//     </form>
//   );
// }

// export default UpdateContactForm;