import React, { useEffect, useState } from "react";
import "./style.css"
import { DeleteUser, GetUsers } from "../../Platform/Api";

export const Users = () => {
    const [users, setUsers] = useState({})

    useEffect(() => {
        getUserList()
    }, [])


    const getUserList = async() => {
        const result = await GetUsers()
        if(result.data) {
            setUsers(result.data)
        }
    }

    const DeleteUsers = async (id) => {
        console.log(id);
        const result = await DeleteUser(id)
        if(result) {
            getUserList()
        }
    }


    return <div className="users-items">
        {users.length ? users.map((item, index) => {
            return <div key={index} className="user-item">
                <span className="user-delete" onClick={() => DeleteUsers(item._id)}>X</span>
                <div className="user-img" style={{backgroundImage: `url('${item.profileImage}')`}}>
                </div>
                <div className="user-details">
                    <h2>{item.firstname} {item.lastname}</h2>
                    <p>Position: {item.position}</p>
                    <p>Email: {item.email}</p>
                </div>

            </div>
        }) : null}
    </div>
}