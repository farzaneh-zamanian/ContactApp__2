import styles from "./ContactList.module.css";

import SearchBox from "../SearchBox/SearchBox";
import LoadingContacts from "../Loading/Loading";
import ContactItems from "../ContactItems/ContactItems";
import useContactsContext from "../../hook/useContactsContext";

function ContactList() {
  const { state, selectAllChecked, handleSelectAll, handleDelete } =
  useContactsContext();
    

  return (
    <div className={styles.container}>
      <div style={{ width: "100%", height: "5rem" }}>
        {state.error && (
          <div className={styles.alertContainer} style={{ color: "red" }}>
            <span>{state.error}</span>
          </div>
        )}
        {state.alertMessage && (
          <div className={styles.alertContainer} style={{ color: "green" }}>
            <span>{state.alertMessage}</span>
          </div>
        )}
      </div>

      <div className={styles.ContactListHeader}>
        <h2>Contacts List</h2>
        <SearchBox />
        <div className={styles.deleteAllContainer}>
          <input
            type="checkbox"
            checked={selectAllChecked}
            onChange={handleSelectAll}
          />
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            Delete selected
          </button>
        </div>
      </div>
      {!state.data.length ? (
        <LoadingContacts />
      ) : (
        <ul>
          {state.data.map((contact) => (
            <ContactItems key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
