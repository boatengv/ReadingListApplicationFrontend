'use client';
import { useState } from "react";
import React from 'react'
import { newBook } from "./newBook";
import Image from 'next/image'
import Modal from "./Components/CustomModal";


export interface Param{
    studentId: string
}

const NavBar = (param: Param) => {

    const [book, setBook] = useState(""); 
    const [searchList, setSearchList] = useState<newBook[]>([])
    const [showModal, setShowModal] = useState(false)
    const [openBook, setOpenBook] = useState<newBook>()

    const handleBook = (e: { target: { value: React.SetStateAction<string> } }) => {
        setBook(e.target.value)
        getBooks(e.target.value)
    }
    
    const getBooks = async (book: React.SetStateAction<string>) => {
        let data = []

        if(book.length > 1){
           const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=10&printType=books`
            );
            data = await response.json();       
        }

        const bookList = data.items ?  data.items.map((book: any) => {return book.volumeInfo;}): []  
        setSearchList(bookList)
    };

    const logout = () => {
        fetch(`http://localhost:8080/api/Logout/${param.studentId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const openAddBookModal = (book: newBook) => {
        setOpenBook(book)
        setShowModal(true)
    }

    const closeAddOpenBookModal = () => {
        setShowModal(false)
    }

    return (
        <div className="flex flex-row bg-golden-brown border-b-4 border-t-4 border-dark-brown">
           
            {/* Icone */}
            <div className="basis-1/4">
                <Image
                    src="/Make-a-cool-logo-for-a-book-website-with-the-phrase--Read-A-List-.png"
                    quality={100}
                    width={148}
                    height={128}
                    alt=""
                /> 
            </div>
            {/* Search Bar */}
            <div className="basis-1/2 py-2"> 
                <div className="flex flex-row w-128 pt-2 mx-auto">           
                    <div className="">
                        <input 
                            type="text" value={book} onChange={handleBook}  
                            className="placeholder-light-brown !outline-none w-108 bg-dark-brown rounded-l-xl py-3 text-lg text-center text-light-brown" 
                            placeholder="Search books by name, author, genre and etc ..." >
                        </input>
                    </div>
                    <div className="rounded-r-xl py-3 px-4 bg-light-brown">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>  
                    </div>
                </div> 

                {/* SearchList items */}
                <div className="block absolute left-1/2 transform -translate-x-1/2 rounded-lg border-2 border-dark-brown">
                {searchList.map((item, index) => { 
                    return (
                        <div 
                            className={`flex bg-light-brown w-128 p-2 cursor-pointer ${index === 0 ? "rounded-t-lg": ""} ${index === searchList.length - 1 ? "rounded-b-lg": "border-b-2 border-dark-brown"}`}
                            onClick={() => openAddBookModal(item)}
                        >
                            <div className="flex-none w-16 h-16 mr-4">
                                <img
                                    src={item?.imageLinks?.smallThumbnail}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h1 className="text-sm">{item.title}</h1>
                            </div>
                            
                        </div>
                    );
                })}
                </div>
            </div>

            {/* Logout icon */}
            <div className="basis-1/4">
                <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 hover:w-20 hover:py- cursor-pointer float-right py-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
            </div>

               {
                    showModal && openBook &&
                    <Modal 
                        book={openBook} 
                        closeModal={closeAddOpenBookModal}  
                        studentId = {param.studentId}                
                    />
                }
           
    </div>  
  )
}

export default NavBar