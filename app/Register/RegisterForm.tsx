'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { genSaltSync, hashSync } from "bcrypt-ts";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(email !== confirmEmail){
            return;
        }

        if(password !== confirmPassword){
            return;
        }

        {/*hashing the password before storing DB*/}
        const salt = genSaltSync(10);
        const hashed_password = hashSync(password, salt);

        {/*Register Account*/}
        fetch(`http://localhost:8080/api/AddStudent?name=${fullName}&email=${email}&password=${hashed_password}&salt=${salt}`,{
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
                Swal.fire({
                    title: 'success!',
                    text: 'Please click the Button to Sign In',
                    icon: 'success',
                    showDenyButton: true,
                    confirmButtonText: 'Sign in',
                    denyButtonText: 'Close', 
                })
                .then((result) => {
                    if(result.isConfirmed){
                        router.push(`/Login`);
                    }
                })
            } else {
                toast.error('Account has already been registered!', {
                    position: "top-center",
                    theme: "dark"
                });
                return;
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleFullName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFullName(e.target.value)
    }

    const handleEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
    }

    const handleConfirmEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setConfirmEmail(e.target.value)
    }

    const handlePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value)
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

                {/*Confirm Email Input*/}
                <input value={confirmEmail} onChange={handleConfirmEmail} type="email" placeholder="Confirm Email" className={`!outline-none w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif ${email === confirmEmail ? "border-b-2 border-black" : "border-b-2 border-red-600 bg-orange-300"}`} required></input>

                {/*Password Input*/}
                <div className="w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" >
                    <div className="grid grid-cols-6 h-12 mb-4">
                        <div className="col-start-1 col-span-5 border-black border-b-2">
                            <input value={password} onChange={handlePassword} type={`${!showPassword ? "password" : "text" }`} placeholder="Password" className="!outline-none h-6 sm:h-12 block text-center text-sm sm:text-xl italic font-serif" required></input>
                        </div>
                        <div className="col-start-6 col-end-6 border-black border-b-2">
                            <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto mt-2 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            
                {/*Confirm Password Input*/}
                <div className="w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" >
                    <div className="grid grid-cols-6 h-12 mb-4">
                        <div className={`col-start-1 col-span-5 ${password === confirmPassword ? "border-b-2 border-black" : "border-b-2 border-red-600 bg-orange-300"}`}>
                            <input value={confirmPassword} onChange={handleConfirmPassword} type={`${!showConfirmPassword ? "password" : "text" }`} placeholder="Confirm Password" className={`!outline-none h-6 sm:h-12 block text-center text-sm sm:text-xl italic font-serif ${password === confirmPassword ? "bg-white" : "bg-orange-300"}`} required></input>
                        </div>
                        <div className={`col-start-6 col-span-1 ${password === confirmPassword ? "border-b-2 border-black" : "border-b-2 border-red-600 bg-orange-300"}`}>
                            <svg onClick={() => setShowConfirmPassword(!showConfirmPassword)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto mt-2 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/*Register*/}
                <button type="submit" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 sm:my-8 text-sm sm:text-xl font-serif bg-red-600 hover:bg-red-400">Create Acccount</button>      
            </div>
            <ToastContainer/>
        </form>
    )
}

export default RegisterForm;