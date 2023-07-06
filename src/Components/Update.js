import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Update = () => {

    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const navigate= useNavigate();


    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("Name"));
        setEmail(localStorage.getItem("Email"));

    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("id..",id);
        axios.put(
            'https://64a4fd9d00c3559aa9bee444.mockapi.io/crud-operation/${id}',
            {
               name:name,
               email:email,
            })
            .then(() => {
           navigate("/read");
        });
    };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update 
        </button>
        <button
          type="submit"
          className="btn btn-secondary mx-2"        >
          Back 
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  )
}

export default Update
