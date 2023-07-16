import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted!");
  };

  return (
   
    <div className="max-w-md mx-auto p-4 mt-28 shadow-md shadow-cyan-500/50 rounded-md" style={{
      background: 'url(https://media.istockphoto.com/id/911633218/vector/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background.jpg?s=612x612&w=0&k=20&c=eYz8qm5xa5wbWCWKgjOpTamavekYv8XqPTA0MC4tHGA=) center/cover',
    }}>>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src="https://ambula.app/assets/images/Icon.png" alt="" width={90}/></div>
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500">Subscribe To Ambula</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          ></textarea>
        </div>
        <div className="flex justify-center">
        <button
  type="submit"
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-500 "
>
  Submit
</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
