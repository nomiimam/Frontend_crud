import React from "react";

const View = () => {
  return (
    <>
      <div className="container">
        <button className="btn btn-primary">Add Data</button>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Work</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ali</td>
              <td>ali@gmail.com</td>
              <td>25</td>
              <td>mobile</td>
              <td>work</td>
              <td>address</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
