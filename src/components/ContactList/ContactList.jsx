import React, { useState, useEffect } from "react";
import styles from "./ContactList.module.css";
import { BsTelephoneForward } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import SearchBox from "../SearchBox/SearchBox";
import { api } from "../../services/config";
import LoadingContacts from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useContacts } from "../../context/ContactsProvider";

function ContactList() {
  // this is the state of contacts in provider
  const { contacts, isLoading, error, handleEdit, handleDelete } = useContacts();

  // const [isloading, setIsLoding] = useState(true);


  // useEffect(() => {
  //   const fetchContacts = () => {
  //     api
  //       .get("/contacts/")
  //       .then((response) => {
  //         setContacts(response);
  //         console.log(contacts);
  //         setIsLoding(!isloading);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   // Fetch contacts after 1 seconds to show skeleton loading
  //   setTimeout(fetchContacts, 1000);
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ContactListHeader}>
        <h2>Contacts List</h2>
        <SearchBox />
      </div>
      {/* {!contacts.length && !error && <h3>Loading</h3>} */}
      {isLoading ? (
        <LoadingContacts />
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <Link to={`/contacts/${contact.id}`}>
                {/* contact info */}
                <div className={styles.containerContactInfo}>
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
                    <p>
                      <BsTelephoneForward />
                      <span className={styles.telephone}>
                        <a href={`tel:${contact.telephone}`}>
                          {" "}
                          {contact.telephone}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
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
      )}
    </div>
  );
}

export default ContactList;
