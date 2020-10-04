import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

export function UsersList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await fetch('/api/users').then(e => e.json()).then(users => setUsers(users))
        }
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <h1>Users List
                    <Button outline className="float-right" color="primary" style={{ marginTop: '1%' }}><Link to="/users/0">Add User</Link></Button>
                </h1>
            </div>
            {
                users.length === 0 ?
                    <h3 style={{ textAlign: "center" }}> No users available</h3> :
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Age</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(eachUser => renderUserData(eachUser))
                            }
                        </tbody>
                    </Table>
            }
        </div>
    );
}

function renderUserData(rowData) {
    return (
        <tr key={rowData.id}>
            <td><Link to={"/users/" + rowData.id}>{rowData.id}</Link></td>
            <td>{rowData.username}</td>
            <td>{rowData.age}</td>
            <td>{rowData.name}</td>
        </tr>
    )
}
