import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ContactList;
