import React, { useState, useEffect } from "react";
import styles from "./ContactList.module.css";
import { BsTelephoneForward } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import SearchBox from "../SearchBox/SearchBox";
import { api } from "../../services/config";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api
      .get("/contacts") 
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ContactListHeader}>
        <h2>Contacts List</h2>
        <SearchBox />
      </div>
      {/* skeleton loading contacts */}
      {/* {!contacts.length && !error && <h3>Loading</h3>} */}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            {/* contact info */}
            <div className={styles.avatar}>
              <img
                src={`https://ui-avatars.com/api/?name=${contact.name}+${contact.lastName}`}
                alt={contact.name}
              />
            </div>
            <div className={styles.contactInfo}>
              <h3>
                {contact.name} {contact.lastName}
              </h3>
              <p>{contact.email}</p>
              <p>{contact.telephone}</p>
            </div>
            {/* action buttons */}
            <div className={styles.actions}>
              <button
                className={styles.editBtn}
                onClick={() => handleEdit(contact)}
              >
                <FaRegEdit fontSize="1.6rem" color="#fff" />
              </button>

              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(contact.id)}
              >
                <AiTwotoneDelete fontSize="1.6rem" />
              </button>
              <button className={styles.favoriteBtn}>
                <GoHeartFill fontSize="1.6rem" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
