import { useState } from "react";
import  '../styles.css'
function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filteredContacts = contacts.filter((contactItem) => {
    return Object.keys(contactItem).some((key) => {
    return contactItem[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())  
    });
  });
  console.log("filteredContacts",filteredContacts);
  return (
    <div>
      <input
        name="fullname"
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
      ></input>
      <ul className="ullist">
        {contacts.map((contact, i) => {
          return (
            <li key={i}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>               
            </li>
          );
        })}
      </ul>
     <p>Total Contacts ({filteredContacts.length})</p>
    </div>
  );
}

export default List;
