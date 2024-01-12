'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const RegisterForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log(fullName)
        console.log(email)
        console.log(confirmEmail)
        console.log(password)
        console.log(confirmPassword)

        if(email !== confirmEmail){
            console.log("email does not match confirmation email")
            return;
        }

        if(password !== confirmPassword){
            console.log("password does not match confirm password")
            return;
        }

        {/*Register Account*/}
        fetch(`https://readlistapplicationbackend-0f5ae867c6ce.herokuapp.com/api/AddStudent?name=${fullName}&email=${email}&password=${password}`,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data){
                router.push(`/Login`);
            }
            {/* Account already exists */}
            return;
        })
        .catch((err) => {
            console.log(err)
        })
        
        {/*Account successfully been registered notfication*/}


        {/*sleep for little*/}


        {/*Redirect to Login page*/}

    }

    const handleFullName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFullName(e.target.value)
    }

    const handleEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
    }

    const handleConfirmEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setConfirmEmail(e.target.value)
        if(email !== confirmEmail){
            console.log("email is not the same")
        }
    }

    const handlePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value)
        if(password !== confirmPassword){
            console.log("email is not the same")
        }
    }

    const handleConfirmPassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="border-4 border-black mx-auto mt-16 w-64 h-84 sm:my-32 sm:w-128 sm:h-128 bg-white">
                
                {/*Login Form Header*/}
                <div className="flex flex-row mt-2 mb-2 sm:ml-12 sm:mb-6">
                    <div>
                    <h1 className="text-sm italic font-serif mt-5 mr-4 ml-4 sm:text-3xl"> Welcome To Read A List </h1>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12 mt-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    </div>
                </div>
            
                {/*Full Name */}
                <input value={fullName} onChange={handleFullName} type="text" placeholder="Full Name" className="!outline-none border-b-2 border-black w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
                
                {/*Email Input*/}
                <input value={email} onChange={handleEmail} type="email" placeholder="Email" className="!outline-none border-b-2 border-black w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>

                {/*Email Input*/}
                <input value={confirmEmail} onChange={handleConfirmEmail} type="email" placeholder="Confirm Email" className="!outline-none border-b-2 border-black w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
            
                {/*Password Input*/}
                <input value={password} onChange={handlePassword} type="password" placeholder="Password" className="!outline-none border-b-2 border-black w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
            
                {/*Password Input*/}
                <input value={confirmPassword} onChange={handleConfirmPassword} type="password" placeholder="Confirm Password" className="!outline-none border-b-2 border-black w-6/12 h-6 sm:h-12 block text-center mx-auto mt-4 mb-8 text-sm sm:text-xl italic font-serif" required></input>
            
                {/*Register*/}
                <button type="submit" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 sm:my-8 text-sm sm:text-xl font-serif bg-red-600 hover:bg-red-400">Create Acccount</button>
            </div>
        </form>
    )
}

export default RegisterForm;