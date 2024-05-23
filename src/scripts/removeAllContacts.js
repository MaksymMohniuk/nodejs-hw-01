import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const erasedContacts = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(erasedContacts, null, 2),
      'utf-8',
    );
    return erasedContacts;
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
};

await removeAllContacts();
