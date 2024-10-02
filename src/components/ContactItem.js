const ContactItem = ({ contact, onDelete, onEdit }) => {
    return (
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <button onClick={() => onEdit(contact)}>Edit</button>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    );
  };
  
  export default ContactItem;
  