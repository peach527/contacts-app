const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/contact-manager", { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  category: String
});

const Contact = mongoose.model("Contact", contactSchema);

app.get("/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

app.post("/contacts", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

app.put("/contacts/:id", async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(contact);
});

app.delete("/contacts/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
