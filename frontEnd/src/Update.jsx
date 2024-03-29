import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        name: '',
        email: ''
    });
    
    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                setValues({
                    name: res.data[0].Name,
                    email: res.data[0].Email
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, values)
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}> 
            <div>
                <form onSubmit={handleUpdate}>
                    <h2>Update Student's Details</h2>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder='Enter Name' 
                            className='form-control' 
                            value={values.name}
                            onChange={e => setValues({...values, name: e.target.value})} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder='Enter Email' 
                            className='form-control' 
                            value={values.email}
                            onChange={e => setValues({...values, email: e.target.value})} 
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
