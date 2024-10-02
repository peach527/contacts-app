const baseUrl = "http://localhost:5000/contacts";

const getContacts = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};

const addContact = async (contact) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });
  return response.json();
};

const updateContact = async (contact) => {
  const response = await fetch(`${baseUrl}/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });
  return response.json();
};

const deleteContact = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  });
};

export default {
  getContacts,
  addContact,
  updateContact,
  deleteContact
};
