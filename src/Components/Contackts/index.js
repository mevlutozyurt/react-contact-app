import { useState ,useEffect} from "react";
import List from "./List";
import Form from "./Form";
import  './styles.css'
function Contacts() {
  const [contacts,setContacts]=useState([
    {fullname:"Ahmet",phone_number:"123"},
    {fullname:"Ali",phone_number:"456"},
    {fullname:"Hasan",phone_number:"798"},
    {fullname:"Tahsin",phone_number:"147"},
  ]); 

  useEffect(()=>{
    console.log("cantacts: ",contacts);
  },[contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List  contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
