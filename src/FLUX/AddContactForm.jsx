// import React, { useState } from 'react';
// import ContactActions from './ContactActions';

// function AddContactForm() {
//   const [name, setName] = useState('');
//   const [family, setFamily] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contact = {
//       name,
//       family,
//       email,
//     };
//     ContactActions.addContact(contact);
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
//       <button type="submit">Add Contact</button>
//     </form>
//   );
// }

// export default AddContactForm;