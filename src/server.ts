import { insertDocument } from "./functions/insertDocument";
//mock data
const users = [
  { id: 'user::1', name: 'Alice Smith', email: 'alice@example.com', age: 28 },
  { id: 'user::2', name: 'Bob Johnson', email: 'bob@example.com', age: 34 },
  { id: 'user::3', name: 'Charlie Brown', email: 'charlie@example.com', age: 22 },
  { id: 'user::4', name: 'Diana Ross', email: 'diana@example.com', age: 41 },
  { id: 'user::5', name: 'Evan Lee', email: 'evan@example.com', age: 30 },
];

//function to intsert Doxument to CouchBaase
(async () => {
 
  try {
    for (const user of users) {
      await insertDocument(user.id, user);
    }
    console.log('All mock users inserted successfully.');
  } catch (err) {
    console.error('Error inserting mock users:', err);
  }
})();