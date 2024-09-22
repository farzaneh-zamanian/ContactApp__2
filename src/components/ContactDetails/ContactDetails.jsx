import React, { useState, useEffect } from "react";
import { api } from "../../services/config";
import { useParams } from "react-router-dom";
import styles from "./ContactDetails.module.css";

function ContactDetails() {
  const params = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = () => {
      setLoading(true);
      api
        .get(`/contacts/${params.id}`)
        .then((response) => {
          setContact(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };
    fetchContact();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!contact) {
    return <div>No contact found</div>;
  }

  return (
    <div className={styles.containerContactDetail}>
      <h2>
        {contact.name} {contact.lastName}
      </h2>
      <p>
        <label>Email:</label>
        <span> {contact.email}</span>
      </p>
      <p>
        <label>Phone:</label>
        <span> {contact.telephone}</span>
      </p>
      <p>
        <label>Description:</label>
        <span>{contact.description}</span>
      </p>
    </div>
  );
}

export default ContactDetails;
