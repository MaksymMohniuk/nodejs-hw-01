import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileData);
    const contactsNumber = contacts.length;
    return contactsNumber;
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};
console.log(await countContacts());
