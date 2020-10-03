import React, { useState, useEffect } from 'react';
import { Button, Spinner, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export function User({ match }) {
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isUserUnavailable, setIsUserUnavailable] = useState(false);
    useEffect(() => {
        let userId = match.params.userId;
        async function fetchData() {
            setIsLoading(true);
            setIsUserUnavailable(false);
            await fetch('/api/users/' + userId)
                .then(e => {
                    if (e.status !== 200) throw new Error();
                    return e.json();
                })
                .then(user => {
                    setUserData(user);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsUserUnavailable(true);
                    setIsLoading(false);
                })
        }
        if (userId !== "0")
            fetchData();
    }, [match.params.userId]);

    function showToast(message, isError) {
        toast.dismiss();
        toast(message, { type: isError ? "error" : "success", position: "bottom-right", autoClose: true });
    }
    function validateFields() {
        let message = '';
        if (!userData.username || userData.username === '')
            message = 'Please enter username.';
        else if (!userData.age || userData.age === '')
            message = 'Please enter age.';
        else if (!userData.name || userData.name === '')
            message = 'Please enter name.';
        if (message !== '') {
            showToast(message, true);
            return true;
        }
        return false;
    }

    function updateUser() {
        if (validateFields()) return;
        let userId = match.params.userId;
        let url = '/api/users/';
        let method = 'POST';
        if (userId !== "0") {
            url += userId;
            method = 'PUT';
        }
        fetch(url, {
            method: method,
            body: JSON.stringify(userData),
            headers: { "content-type": "application/json" }
        })
            .then(async (e) => {
                if (e.status > 201 || e.status < 200) throw new Error();
                showToast("User saved successfully.");
                let uId = await e.json();
                history.push('/users/' + uId)
            })
            .catch(err => {
                console.log(err);
                showToast("Unable to update the user. Please check if username already exists.", true);
            })
    }
    async function deleteUser() {
        var deletePromise = fetch('/api/users/' + match.params.userId, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        });
        if ((await deletePromise).status !== 200) {
            showToast("Unable to delete the user.", true);
            return;
        }
        showToast("User deleted successfully");
        history.push('/users')
    }

    function handleChange(e) {
        let val = e.target.value;
        if (e.target.type === "number") val = parseInt(val);
        setUserData({ ...userData, [e.target.name]: val });
    }

    function renderUserUnavailable() {
        return (
            <div>
                <h3>User not found or an error occured while fetching data.</h3>
                <p><Link to="/users">Click here to navigate to users list</Link></p>
            </div>
        )
    }

    function renderButtons() {
        return (
            match.params.userId === "0" ?
                <Button className="float-right" outline color="primary" onClick={updateUser}>Save User</Button> :
                <div>
                    <Button className="float-right" color="danger" onClick={deleteUser}>Delete User</Button>
                    <Button className="float-right" style={{ marginRight: '5px' }} outline color="primary" onClick={updateUser}>Update User</Button>
                </div>
        )
    }

    function renderUserData() {
        return isUserUnavailable ? renderUserUnavailable() :
            <div>
                <h1>User Data</h1>
                <Form>
                    <FormGroup>
                        <Label for="idLabel">User Id:{' '} </Label>
                        <Label name="id" id="id"> {userData.id || " In Progress"}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="usernameLabel">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Username" value={userData.username || ''} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="ageLabel">Age</Label>
                        <Input type="number" name="age" id="age" placeholder="Age" value={userData.age || ''} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nameLabel">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" value={userData.name || ''} onChange={handleChange}></Input>
                    </FormGroup>
                    {renderButtons()}
                </Form>
            </div >
    }
    return (isLoading ? <Spinner color="primary" /> : renderUserData());
}

