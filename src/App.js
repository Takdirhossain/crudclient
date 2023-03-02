import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Addnew from "./components/Addnew";
import Loading from "./components/Loading";


function App() {
  const [info, setInfo] = useState([]);
  const [singlestudent, setsinglestudent] = useState({});
const [loading, setLoading] = useState(false)
  const [name, setName] = useState(singlestudent.name);
  const [contact, setContact] = useState(singlestudent.contact);
  const [address, setAddress] = useState(singlestudent.address);
  const [pincode, setPincode] = useState(singlestudent.pincode);


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

  const update = (id) => {
    const studentinfo = {
      name: name,
      contact: contact,
      address: address,
      pincode: pincode,
    };

    fetch(`https://task-takdirhossain.vercel.app/api/auth/students/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Update!");
        
      });
  };

  useEffect(() => {
    setLoading(true)
    fetch(`https://task-takdirhossain.vercel.app/api/auth`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data) });
        setLoading(false)
  }, [info]);

  const handaledelete = (id) => {
    fetch(`https://task-takdirhossain.vercel.app/api/auth/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Delete!");
      });
  };

  const handaleupdate = (id) => {
    fetch(`https://task-takdirhossain.vercel.app/api/auth/students/${id}`)
      .then((res) => res.json())
      .then((data) => setsinglestudent(data));
  };
  return (
    <div className="w-4/5 m-auto mt-20">
      <div className="bg-[#3881C0] pt-5 pb-5 pl-5 rounded flex justify-between">
        <h2 className="text-3xl font-bold text-[#fff]">Booking List</h2>
        
        <span className="mr-5">
          <Addnew></Addnew>
        </span>
      </div>
      <div>
        
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Contact </th>
                <th>address</th>
                <th>pincode</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <>
                <Loading></Loading>
                </> : <>
                {info.map((inforow, i) => (
                <tr key={inforow._id}>
                  <th>{i + 1}</th>
                  <td>{inforow.name}</td>
                  <td>{inforow.contact}</td>
                  <td>{inforow.address}</td>
                  <td>{inforow.pincode}</td>
                  <td>
                    <div>
                      <a
                        href="#my-modal-2"
                        onClick={() => handaleupdate(inforow._id)}
                        className="btn"
                      >
                        Update
                      </a>

                      <div className="modal" id="my-modal-2">
                        <div className="modal-box">
                          <form className="grid grid-cols-1 gap-3 mt-10">
                            <input
                            
                            Value={singlestudent.name}
                              type="text"
                              name="name"
                              onBlur={handleNameChange}
                              placeholder="Your Name"
                              className="input w-full input-bordered "
                            />

                            <input
                             Value={singlestudent.contact}
                              name="contact"
                              type="text"
                              onChange={handleContactChange}
                              placeholder={singlestudent.contact}
                              className="input w-full input-bordered"
                            />
                            <input
                            Value={singlestudent.contact}
                              name="address"
                              type="text"
                              onChange={()=>handleAddressChange}
                              placeholder={singlestudent.address}
                              className="input w-full input-bordered"
                            />
                            <input
                            Value={singlestudent.pincode}
                              name="pincode"
                              type="text"
                              onChange={handlePincodeChange}
                              placeholder={singlestudent.pincode}
                              className="input w-full input-bordered"
                            />

                            <br />
                          </form>
                          <div className="modal-action">
                            <a href="#" onClick={()=>update(inforow._id)} className="btn">
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => handaledelete(inforow._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
                </>
              }
              
             
            </tbody>
          </table>
        </div>

        {/* <Update></Update> */}
      </div>
    </div>
  );
}

export default App;
