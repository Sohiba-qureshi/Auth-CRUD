import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Read() {
    const { id } = useParams();
    const [students, setStudent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/read/' +id)
            .then(res => {
                console.log(res)
                setStudent(res.data[0]);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        // <div className=' d-flex vh-100 bg-primary row justify-content-center aign-items-center'>
        //  <div className='col-auto w-50 rounded p-3'>
        <div>
            <div>
                <h2>Student Details</h2>
                <h3>{students?.ID}</h3>
                {students && (
                    <>
                        <h3>ID: {students.ID}</h3>
                        <h3>Name: {students.Name}</h3>
                        <h3>Email: {students.Email}</h3>
                    </>
                )}


                {/* <h3>{students.id}</h3>
                <h3>{students.Name}</h3>
                <h3>{students.Email}</h3>  */}

                {/* Link not working  */}
                <button className="btn btn-primary me-2"><a href='/home' style={{ color: "white" }}> Back </a></button>
                {/* <button className="btn btn-success me-2"><a href='/edit/${students.ID}' style={{ color: "white" }}> Update </a></button> */}

            </div>
        </div>
    )
}

export default Read