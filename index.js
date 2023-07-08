const contacts = require("./contacts.js");
const { Command } = require("commander");

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case 'get':
      const getContact = await contacts.getContactById(id);
      return console.log(`Found contact with current id: ${id} `, getContact);
    case 'add':
      const addContact = await contacts.addContact(name, email, phone);
      return console.log('Added contact: ', addContact);
    case 'remove':
      const removeContact = await contacts.removeContact(id);
      return console.log('Deleted contact: ', removeContact);
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);