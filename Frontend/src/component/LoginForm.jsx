import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("email submitted is:", email);
        console.log("password submitted is:", password);

        fetch(`http://localhost:8080/api/GetStudentId/${email}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            navigate("/Home", {state: {key: data}});
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:
                    <input type="email" value={email} onChange={handleEmail}></input>
                </label>
                <label>Password:
                    <input type="password" value={password} onChange={handlePassword}></input>
                </label>
            </div> 
            <button type="Submit" value="Submit">Login</button>
        </form>    
    )
}