'use client';
import { useState } from "react";
import React from 'react'
import { newBook } from "../interface/newBook";
import Modal from "./CustomModal";


export interface Param{
    studentId: string
}

const SearchBar = (param: Param) => {

    const [book, setBook] = useState(""); 
    const [searchList, setSearchList] = useState<newBook[]>([])
    const [showModal, setShowModal] = useState(false)
    const [openBook, setOpenBook] = useState<newBook>()

    const handleBook = (e: { target: { value: React.SetStateAction<string> } }) => {
        console.log("input search param is ",e.target.value)
        setBook(e.target.value)
        getBooks(e.target.value)
    }
    
    const getBooks = async (book: React.SetStateAction<string>) => {
        let data = []

        if(book.length > 0){
           const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=6&printType=books`
            );
            data = await response.json();       
        }

        const bookList = data.items ?  data.items.map((book: any) => {return book.volumeInfo;}): []  
        setSearchList(bookList)
    };

    const openAddBookModal = (book: newBook) => {
        setOpenBook(book)
        setShowModal(true)
    }

    const closeAddOpenBookModal = () => {
        setShowModal(false)
    }

    return (        
        <div className="flex pt-20 py-12"> 
            <div className="block mx-auto">    
                
                {/* Search Bar */} 
                <div className=" flex flex-row border-b-2 border-black shadow-lg">
                    <div className="">
                    <input 
                            type="text" value={book} onChange={handleBook}  
                            className="!outline-none placeholder-black text-3xl placeholder:italic placeholder:font-bold w-128" 
                            placeholder="Search For books by title, author,..." >
                        </input>  
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>  
                    </div>         
                </div>    

                {/*SearchList*/}
                {
                book.length !== 0 &&
                <div className={`mt-2 absolute ${searchList.length > 0 ? "border-2 border-black" : ""}`}>
                    {searchList.map((item, index) => { 
                        return (
                            <div 
                                className={`flex bg-gray-300 w-140 p-2 cursor-pointer ${index === 0 ? "": ""} ${index === searchList.length - 1 ? "": "border-b-2 border-black"}`}
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
                }
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

export default SearchBar