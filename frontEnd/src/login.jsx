import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', values);
      console.log('Login successful:', response.data);
      // Redirect to home page upon successful login
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      window.alert('Login failed. Invalid email or password.');
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className='mb-2'>
            <input type="text" placeholder='Enter Email' name='email' className='form-control' onChange={handleChange} required/>
          </div>
          <div className='mb-2'>
            <input type="password" placeholder='Enter Password' name='password' className='form-control' onChange={handleChange} required/>
          </div>
          <button className='btn btn-success'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;





// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'

// function Login(){
//     return(
//         // <div className="d-flex justify-content-center align-items-center bg-primary">
//         //     <div className="p-3 bg-white w-25 ">
//             <div>
//                <div>
//                <form >
//                 <h3>Admin Login</h3>
//                 <div className='mb-2'>
//                     <label htmlFor="">Email</label>
//                     <input type="text" placeholder='Enter Email' className='form-control'/>
//                      {/* onChange={e => setValues ({...values,name: e.target.value})} /> */}
//                 </div>
//                 <div className='mb-2'>
//                     <label htmlFor="">Password</label>
//                     <input type="password" placeholder='Enter Password' className='form-control'/>
//                       {/* onChange={e => setValues ({...values,email: e.target.value})} /> */}
//                 </div>
//                 <button className='btn btn-success'>Login</button>
//             </form>
//             </div>
//         </div>
//     )
// }


// export default Login