import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then((response) => {
                console.log(response.data.data);
                setUser(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error);
            });
    }, [id]);

    const handleOnClickBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>User Details</h1>
            {user && (
                <div>
                    <p>Name: {user.first_name} {user.last_name}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.avatar} alt="User Avatar" style={{ width: "100px", height: "100px" }} />
                    <br></br>
                    <button onClick={handleOnClickBack}>Back</button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;