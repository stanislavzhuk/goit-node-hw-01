import fs from 'fs/promises';
import path from 'path';
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    return contacts.find(contact => contact.id === contactId) || null;
  } catch (error) {
    throw error;
  }
};

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) return null;
    const [result] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return result;
  } catch (error) {
    throw error;
  }
};

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};