import { useContacts } from "../../context/ContactsProvider";
import { useState } from "react";
import styles from "./EditContact.module.css";
import inputs from "../../constants/inputs";

function EditContact({ contact }) {
  const { setEditMode, editContactHandler } = useContacts();
  const [editedContact, setEditedContact] = useState(contact);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEditedContact({ ...editedContact, [name]: value });
  };
  const cancelChangeHandler =()=>{
    setEditMode(false);


  }

  const saveChnageHandler = () => {
      editContactHandler(contact.id,editedContact);
    setEditMode(false);
  };



  return (
    <div className={styles.inputContainer}>
      {inputs.map((input, index) => (
        <p key={index}>
          <input
            type={input.type}
            name={input.name}
            value={editedContact[input.name]}
            onChange={changeHandler}
          />
        </p>
      ))}
      <div   className={styles.actionBtn}>
      <button
        className={styles.saveChangedBtn}
        onClick={saveChnageHandler}
      >
        Save Changes
      </button>
      <button  onClick={cancelChangeHandler}  className={styles.cancelBtn} >Cancel</button></div>
     
    </div>
  );
}

export default EditContact;
