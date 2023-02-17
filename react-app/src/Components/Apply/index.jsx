import React from "react";
import "./style.css"
import { useState } from "react";
import { SetUser } from "../../Platform/Api";
import { useNavigate } from "react-router-dom";


export const Apply = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        position: "",
        password: "",
        confirmPass: "",
        email: "",
        profileImage: "",
    })

    const [error, setError] = useState({
        errorFirstName: "",
        errorLastName: "",
        errorPosition: "",
        errorEmail: "",
        errorPassword: "",
        errorConfirmPass: "",
        errorProfileImage: ""
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const uploadImage = (e) => {
        const element = e.currentTarget
        const fileList = element.files;
        console.log(element.files)
        if (fileList && fileList?.length) {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            console.log(reader)
    
            setUser({...user, profileImage: reader.result})
          });
          reader.readAsDataURL(fileList[0]);
        }
    }

    const Validation = () => {
        let valid = true

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const errors = {
            errorFirstName: "",
            errorLastName: "",
            errorPosition: "",
            errorEmail: "",
            errorPassword: "",
            errorConfirmPass: "",
            errorProfileImage: ""
        }

        if(!user.firstname) {
            errors.errorFirstName = "*First Name is Required!"
            valid = false
        }

        if(!user.lastname) {
            errors.errorLastName = "*Last Name is Required!"
            valid = false
        } 

        if (!user.position) {
            errors.errorPosition = "*Position is Required!"
            valid = false
        } 

        if(!user.password) {
            errors.errorPassword = "*Please Enter Password!"
            valid = false
        } else if(user.password.length < 8) {
            errors.errorPassword = "*Password must be at least 8 chars long!"
            valid = false
        }

        if(!user.confirmPass) {
            errors.errorConfirmPass = "*Password Confirmation is Required!"
            valid = false
        } else if (user.password !== user.confirmPass) {
            errors.errorConfirmPass = "*Password Does Not Match!"
            valid = false
        }

        
        if (!user.profileImage) {
            errors.errorProfileImage = "*Profile Image is Required!"
            valid = false
        }


        if(!user.email) {
            errors.errorEmail = "*Email is Required!"
            valid = false
        } else if(regex.test(user.email) === false) {
            errors.errorEmail = "*Email is Not Valid!"
            valid = false
        }

        setError(errors)

        return valid

    }

    const navigate = useNavigate(); 

    const saveChanges = async () => {
        if(Validation()) {
            const result = await SetUser(user)
            if(result.data) {
                setTimeout(() => {
                    navigate("/users")
                }, 1000)
            } else {
                console.log("error")
            }
        }


        
    }



    return <div className="user-inputs">
        <div>
            <input type="text" 
            value={user.firstname}
            name={"firstname"}
            placeholder="First Name"
            onChange={handleChange}
            className={`${error.errorFirstName ? "border-red" : null} `}
            />
            <div className="errorMsg">{error.errorFirstName ? <p>{error.errorFirstName}</p> : null}</div>
        </div>
        <div>
            <input type="text" 
            value={user.lastname}
            name={"lastname"}
            placeholder="Last Name"
            onChange={handleChange}
            className={`${error.errorLastName ? "border-red" : null} `}
            />
            <div className="errorMsg">{error.errorLastName ? <p>{error.errorLastName}</p> : null}</div>

        </div>
        <div>
            <input type="text" 
            value={user.position}
            name={"position"}
            placeholder="Position"
            onChange={handleChange}
            className={`${error.errorPosition ? "border-red" : null} `}
            />
            <div className="errorMsg">{error.errorPosition ? <p>{error.errorPosition}</p> : null}</div>
        </div>
        <div>
            <input type="email" 
            value={user.email}
            name={"email"}
            placeholder="Email"
            onChange={handleChange}
            className={`${error.errorEmail ? "border-red" : null} `}
            />
            <div className="errorMsg">{error.errorEmail ? <p>{error.errorEmail}</p> : null}</div>
        </div>
        <div>
            <input type="password" 
            value={user.password}
            name={"password"}
            placeholder="Password"
            onChange={handleChange}
            className={`${error.errorPassword ? "border-red" : null} `}
            />
            <div className="errorMsg">{error.errorPassword ? <p>{error.errorPassword}</p> : null}</div>
        </div>
        <div>
            <input type="password" 
            value={user.confirmPass}
            name={"confirmPass"}
            placeholder="Confirm Password"
            onChange={handleChange}
            className={`${error.errorConfirmPass ? "border-red" : null} `}
            />
            <div className="errorMsg">{error.errorConfirmPass ? <p>{error.errorConfirmPass}</p> : null}</div>
        </div>
        <div>
            <input type="file" 
            onChange={uploadImage}
            />
            <div className="errorMsg">{error.errorProfileImage ? <p>{error.errorProfileImage}</p> : null}</div>
        </div>
        <div>
            <button type="button" 
            onClick={saveChanges}
            >Save User</button>
        </div>
       
    </div>
}