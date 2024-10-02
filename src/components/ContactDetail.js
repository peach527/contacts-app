const ContactDetail = ({ contact }) => {
    if (!contact) return <p>Select a contact to view details</p>;
  
    return (
      <div>
        <h2>{contact.name}</h2>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.address}</p>
        <p>Category: {contact.category}</p>
      </div>
    );
  };
  
  export default ContactDetail;
  