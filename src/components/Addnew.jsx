import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const Addnew = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handaleadddata = () => {
    const studentinfo = {
      name: name,
      contact: contact,
      address: address,
      pincode: pincode,
    };
    
    fetch("https://task-takdirhossain.vercel.app/api/auth/adddata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Successfully Added!')
console.log(data);
      });
      
  };
  return (
    <div>
      <label htmlFor="my-modal" className="btn">
       Add New
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add New?</h3>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              onChange={handleNameChange}
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full input-bordered "
            />

            <input
              name="contact"
              type="text"
              onChange={handleContactChange}
              placeholder="contact details"
              className="input w-full input-bordered"
            />
            <input
              name="address"
              type="text"
              onChange={handleAddressChange}
              placeholder="Your Address"
              className="input w-full input-bordered"
            />
            <input
              name="pincode"
              type="text"
              onChange={handlePincodeChange}
              placeholder="Your Pincode"
              className="input w-full input-bordered"
            />

            <br />
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal" onClick={handaleadddata} className="btn">
              Add Data
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnew;
