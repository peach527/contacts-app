import { useState, useEffect } from "react";

const ContactForm = ({ addContact, currentContact, updateContact }) => {
  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    category: ""
  });

  useEffect(() => {
    if (currentContact) {
      setContact(currentContact);
    }
  }, [currentContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({
      name: "",
      address: "",
      phone: "",
      email: "",
      category: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={contact.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={contact.address} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={contact.phone} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={contact.category} onChange={handleChange} />
      <button type="submit">{currentContact ? "Update Contact" : "Add Contact"}</button>
    </form>
  );
};

export default ContactForm;
