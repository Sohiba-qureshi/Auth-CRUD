import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/signup', values);
      console.log('Signup successful:', response.data);
      // Optionally, redirect the user to another page or show a success message
    } catch (error) {
      console.error('Signup failed:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
    <div>
    <form onSubmit={handleSubmit}>
     <h3>Sign Up</h3>
     <div className='mb-2'>
         <input type="text" placeholder='Enter Name' name='name' className='form-control' onChange={handleChange} required/>
          {/* onChange={e => setValues ({...values,name: e.target.value})} /> */}
     </div>
     <div className='mb-2'>
         <input type="text" placeholder='Enter Email' name='email' className='form-control' onChange={handleChange} required/>
          {/* onChange={e => setValues ({...values,name: e.target.value})} /> */}
     </div>
     <div className='mb-2'>
     <input type="password" placeholder='Enter Password' name='password' className='form-control' onChange={handleChange} required/>
           {/* onChange={e => setValues ({...values,email: e.target.value})} /> */}
     </div>
     <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-warning me-2"><a href='/home' style={{ color: "white", textDecoration: "none" }}>SignUp</a></button>
                    <button className="btn btn-info"><a href='/login' style={{ color: "white", textDecoration: "none" }}>Login</a></button>
                </div>
 </form>
 </div>
</div>
  );
}

export default Signup;
