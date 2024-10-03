import React, { useState } from "react";
import styles from "./ContactItems.module.css";

import { BsTelephoneForward } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useContacts } from "../../context/ContactsProvider";

import EditContact from "../EditContact/EditContact";
import useContactsContext from "../../hook/useContactsContext";

function ContactItems({ contact }) {
  const {
    editMode,
    setEditMode,
    deleteContactHandler,
    editContactHandler,
    selectedContacts,
    handleSelect,
  } = useContactsContext();
  

  const [currentContact, setCurrentContact] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(false);

  const handleEdit = (contact) => {
    setEditMode(true);
    setCurrentContact(contact);
  };

  const handleSave = async (updatedContact) => {
    try {
      await editContactHandler(updatedContact, currentContact.id);
      setEditMode(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <li className={styles.contactItem}>
      {editMode && currentContact.id === contact.id ? (
        <EditContact contact={contact} />
      ) : (
        <>
          {/* contact info */}
          <div className={styles.checkBoxContainer}>
            <input
              type="checkbox"
              checked={selectedContacts.includes(contact)}
              onChange={() => handleSelect(contact)}
            />
            <div className={styles.containerContactInfo}>
              <Link
                className={styles.infoContainer}
                to={`/contacts/${contact.id}`}
              >
                <div className={styles.contactInfoWrapper}>
                  <div className={styles.avatarWrapper}>
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3>
                      {contact.name} {contact.family}
                    </h3>
                    <p>{contact.email}</p>
                  </div>
                </div>
              </Link>

              <p className={styles.telephoneContainer}>
                <BsTelephoneForward />
                <span className={styles.telephone}>
                  <a href={`tel:${contact.telephone}`}>{contact.telephone}</a>
                </span>
              </p>
            </div>
          </div>

          {deleteStatus ? (
            <div className={styles.confirmMessage}>
              <h3>
                Sure to delete
                {contact.name} {contact.family} ?
              </h3>
              <div className={styles.actionBtns}>
                <button onClick={() => deleteContactHandler(contact.id)}>
                  delete
                </button>
                <button onClick={() => setDeleteStatus(false)}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className={styles.actions}>
              <button
                className={styles.editBtn}
                onClick={() => handleEdit(contact)}
              >
                <FaRegEdit fontSize="1.6rem" color="#fff" />
              </button>

              <button
                className={styles.deleteBtn}
                onClick={() => setDeleteStatus(true)}
              >
                <AiTwotoneDelete fontSize="1.6rem" />
              </button>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default ContactItems;
