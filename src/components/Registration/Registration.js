import React, { useState } from 'react'
import InputControl from './../InputControl/InputControl';
import './Registration.css'


import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

import { useNavigate } from 'react-router-dom';
const Registration = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    user: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = (e) => {
    if (!values.name || !values.phone || !values.email || !values.user || !values.password) {
      setErrorMsg("Fill all details");
      return;
    }


    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });      
        
        navigate('/');
      }
    )
      .catch((err) => {

        setErrorMsg(err.message);
        console.log("Error-", err.message);
      });
  }

  

  return (
    <div className="registration">
      <div className="container mt-5">
        <div className="popup">
          {/* <button className="close-btn">&times;</button> */}
          <div className="form">
            <h2>Register</h2>
            <div className="form-element">
              <InputControl type="text" placeholder='Enter your Full Name' label="Full Name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
            </div>
            <div className="form-element">
              <InputControl type="tel" placeholder='Enter Your Mobile No' label="Mobile No" onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))} />
            </div>
            <div className="form-element">
              <InputControl type="email" placeholder='Enter Email Address' label="Email " onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
            </div>
            <div className="form-element select">
              <label htmlFor="">Select Type of User</label>
              <select
                onChange={(event) => setValues((prev) => ({ ...prev, user: event.target.value }))}
              >
                <option value="User">User</option>
                <option value="Business">Business</option>
                <option value="Creator">Creator</option>
              </select>

            </div>
            <div className="form-element">
              <InputControl type="password" placeholder='Enter Password' label="Password" onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} />
            </div>
            <b className='error'>{errorMsg}</b>
            <div className="form-element">
              <button onClick={handleSubmission} >Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Registration;