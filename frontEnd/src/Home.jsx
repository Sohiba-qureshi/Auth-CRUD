import React, { useEffect, useState } from "react";
import axios from 'axios'

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                // Instead of reloading the whole page, update the state to reflect the deletion
                setData(prevData => prevData.filter(student => student.ID !== id));
            })
            .catch(err => console.log(err));
    }

    return (

        <div>
            <div>
                <h2>Student List</h2>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success"><a href='/create' style={{ color: "white" }}>Create +</a></button>
                </div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student) => {
                            return (
                                <tr key={student.ID}>
                                    <td>{student.ID}</td>
                                    <td>{student.Name}</td>
                                    <td>{student.Email}</td>
                                    <td>
                                        <a href={`/read/${student.ID}`} className='btn btn-primary me-2 '>Read</a>
                                        <a href={`/edit/${student.ID}`} className='btn btn-success me-2'>Edit</a>
                                        <button onClick={() => handleDelete(student.ID)} className='btn btn-danger me-2 btn-info'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-warning"><a href='/signout' style={{ color: "white", textDecoration: "none" }}>Sign Out</a></button>
                </div>
            </div>
        </div>
    )
}

export default Home;
