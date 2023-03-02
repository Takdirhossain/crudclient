import React from "react";

const Update = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <h3 className="text-lg font-bold">Want To Book This?</h3>
          <form
            
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="useremail"
              
              readOnly
              className="input w-full input-bordered "
            />

            <input
              name="name"
              
              readOnly
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
             
              readOnly
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Your Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
         
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
