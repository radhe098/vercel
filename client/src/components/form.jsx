import React, { useState } from "react";
import axios from "axios";

function Books (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const datasent = async () => {  
    try{await axios.post("http://localhost:5000",{
        name: name, 
        email: email
    })
    alert("Data Sent") ;
  }catch(err){
    console.log(err);
  } }

  const handleSubmit = (event) => {
   setname = "";
  setemail = "";
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };


//   return
  return (
    <form onSubmit={handleSubmit} action="POST" className="space-y-4 w-96 ml-[300px] ">
      <div className="">
        <label
          htmlFor="name"
          className="block text-sm font-medium  text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700"
        > Email
        </label>
        <input id="email" name="email" type="email" required
          className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        onClick={datasent}
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};
export default Books;
