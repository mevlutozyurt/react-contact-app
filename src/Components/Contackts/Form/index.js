import { useState,useEffect } from "react";

const intialFormValues={ fullname: "", phone_number: "" };

function Form({addContact,contacts}) {
  //console.log(addContact);
  // const [form, setForm] = useState({ fullname: "", phone_number: "" });
//contacts değiştiğinde Form Inputlarını temizler.
useEffect(()=>{
setForm(intialFormValues);
},[contacts]);

  const [form, setForm] = useState( intialFormValues);

  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (form.fullname === "" || form.phone_number === "") return false;
    addContact([...contacts,form]);
    //setForm({fullname: "", phone_number: ""});//form değişkeni değerlerinin içi boşaltılarak  Formu temizler
    //setForm(intialFormValues);//form değişkeni değerlerinin içi boşaltılarak  Formu temizler
    //console.log(form);
  };
  return (
    <form onSubmit={submitForm}>
      <div>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          ></input>
        </div>
        <br></br>
        <div className="btndiv">
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
