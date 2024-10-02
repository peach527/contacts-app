import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import contactService from "./services/contactService";

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    contactService.getContacts().then((data) => setContacts(data));
  }, []);

  const addContact = (contact) => {
    contactService.addContact(contact).then((newContact) => {
      setContacts([...contacts, newContact]);
    });
  };

  const updateContact = (updatedContact) => {
    contactService.updateContact(updatedContact).then(() => {
      setContacts(contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c)));
      setCurrentContact(null);
    });
  };

  const deleteContact = (id) => {
    contactService.deleteContact(id).then(() => {
      setContacts(contacts.filter((c) => c.id !== id));
    });
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} currentContact={currentContact} updateContact={updateContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} onEdit={setCurrentContact} />
      <ContactDetail contact={currentContact} />
    </div>
  );
}

export default App;
