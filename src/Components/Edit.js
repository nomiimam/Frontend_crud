import React, { useState } from "react";

const Edit = () => {
  const [inputs, setInputs] = useState({});
  const getInput = (data) => {
    const { name, value } = data.target;
    const input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };
  const submitData = () => {
    console.log(inputs);
  };
  return (
    <div>
      <div className="container">
        <button className="btn btn-primary">Home</button>
        <hr />
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={getInput}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={getInput}
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                name="age"
                onChange={getInput}
                placeholder="Enter Age"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                onChange={getInput}
                placeholder="Enter Mobile"
                required
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label htmlFor="work">Work</label>
              <input
                type="text"
                className="form-control"
                name="work"
                onChange={getInput}
                placeholder="Enter Work"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={getInput}
                placeholder="Enter Address"
                required
              />
            </div>
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={submitData}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
