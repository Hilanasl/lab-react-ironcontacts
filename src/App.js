import logo from './logo.svg';
import './App.css';
import contactJson from './contacts.json'
import {useState} from 'react';

const fiveContacts = contactJson.slice(0,5)

function App() {
  const trophy = '🏆' 

  const [contacts, setContacts] = useState(fiveContacts)

  const addRandom = () => {
    // If we want to check that the randomContact is not already in our contacts Array
    // get our random contact id
    // Try to find in our state contacts if we have a corresponding Id
    // If so ? What shall we do

    // 1 Get a random contact
  const randomContact = contactJson[Math.floor(Math.random() * contactJson.length)];
  // 2 Make a copy of you state (contact) you can use a spread :) 
    const copy = [...contacts]
  // 3 Add (push) the random contatc to the copy !
    copy.push(randomContact)
  // 4 set the copy as the new state  (setContacts)
  setContacts(copy)
}

const sortByName = () => {
  const copy = [...contacts];
  copy.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
  setContacts(copy);
}

const sortByPopularity = () => {
  const copy = [...contacts];
  copy.sort((a, b) => {
    return b.popularity - a.popularity
  })
  setContacts(copy);
}

const deleteContact = (id) => {
  console.log(id)
const filteredContacts = contacts.filter(item => {
  return item.id !== id
})
  setContacts(filteredContacts)
}


  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <div className='btns'>
      <button onClick={() => addRandom()}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      </div>
      <div className='contactsTable'>
        <table>
          <thead>
            <th><b>Picture</b></th>
            <th><b>Name</b></th>
            <th><b>Popularity</b></th>
            <th><b>Won an Oscar</b></th>
            <th><b>Won an Emmy</b></th>
            <th><b>Actions</b></th>
          </thead>
          <tbody>
            {contacts.map(contact => {
              return(
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} width={50} alt=""/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar && trophy}</td>
                  <td>{contact.wonEmmy && trophy}</td>
                  <td><button className="deleteBtn" onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
              )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default App;
