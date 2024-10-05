import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ContactDetails.module.css";
import useContactDetails from "../../hook/useContactDetails";


import { FaArrowLeft } from "react-icons/fa";

function ContactDetails() {
  const params = useParams();

  const contactDetails = useContactDetails(params.id);

  // useEffect(() => {
  //   const fetchContact = () => {
  //     setLoading(true);
  //     api
  //       .get(`/contacts/${params.id}`)
  //       .then((response) => {
  //         setContact(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //   };
  //   fetchContact();
  // }, []);


  if (!contactDetails) {
    return <div>No contact found</div>;
  }

  return (
    <div className={styles.containerContactDetail}>
      <h2>
        {contactDetails.name} {contactDetails.lastName}
      </h2>
      <p>
        <label>Email:</label>
        <span> {contactDetails.email}</span>
      </p>
      <p>
        <label>Phone:</label>
        <span> {contactDetails.telephone}</span>
      </p>
      <p>
        <label>Description:</label>
        <span>{contactDetails.description}</span>
      </p>

      <div className={styles.actions}>     
        <Link to="/contacts" >
          <FaArrowLeft />
          <span>back to contacts</span>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
