'use client';
import React, { useState } from 'react'
import { newBook } from '../newBook';
import { addBook } from '../AddBook/addBook';

interface ModalProps{
    book: newBook,
    studentId: string
    closeModal: () => void;
}

const Modal = (props: ModalProps) => {

    return ( 
        <section className="fixed top-0 right-0 bottom-0 left-0 bg-black-rgba flex items-center justify-center">
            <div className='flex flex-row absolute w-1/2 h-1/2 left-1/2 transform -translate-x-1/2 bg-yellow-900 border-2 border-light-brown'>
                <div className='basis-1/4 border-r-2 border-light-brown w-48 pt-2'>
                    <div className="w-40 h-1/2 h mx-auto">
                        <img
                            src={props.book?.imageLinks?.smallThumbnail}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='w-full h-1/2 overflow-auto overscroll-auto'>
                        {props.book.authors &&
                        <div className='py-1'>
                            <h1 className='text-light-brown text-center font-bold'>Author(s):</h1>
                            <p className='text-light-brown text-center'>{props.book.authors.join(', ')}</p> 
                        </div>
                        }
                        { props.book.pageCount &&
                        <div className='py-1'>
                            <h1 className='text-light-brown text-center font-bold'>Pages:</h1> 
                            <p className='text-light-brown text-center'>{props.book.pageCount}</p> 
                        </div>
                        }
                        {props.book.categories &&
                        <div className='py-1'>
                            <h1 className='text-light-brown text-center font-bold'>Categories:</h1>
                            <p className='text-light-brown text-center'>{props.book.categories.join(', ')}</p> 
                        </div>
                        }
                        {props.book.publisher &&
                        <div className='py-1'>
                            <h1 className='text-light-brown text-center font-bold'>Publisher:</h1>  
                            <p className='text-light-brown text-center'>{props.book.publisher}</p> 
                        </div>
                        }
                        {props.book.publishedDate &&
                        <div className='py-1'>
                            <h1 className='text-light-brown text-center font-bold'>Published Date:</h1> 
                            <p className='text-light-brown text-center'>{props.book.publishedDate}</p> 
                        </div>
                        }
                    </div>
                
                </div>
                <div className='basis-3/4 w-80'>
                    <h1 className='text-center text-3xl text-light-brown py-4 border-b border-light-brown font-bold'>{props.book.title}</h1>
                    <p className='text-light-brown text-md p-4 w-full h-4/6 overflow-auto'>{props.book.description}</p> 
                    <div className='flex flex-row border-t-2 border-light-brown'>
                        <button type="submit" onClick={props.closeModal} className="border-4 border-light-brown rounded-lg w-5/12 h-6 sm:h-12 text-dark-brown text-center mx-auto my-4 sm:my-6 text-sm sm:text-xl font-serif bg-red-600 hover:bg-red-500">Close</button>      
                        <button 
                            type="submit" 
                            onClick={() => addBook(props.studentId, props.book.title, props.book.imageLinks.thumbnail, props.book.authors.join(","), props.book.categories.join(", "), props.book.pageCount, props.book.publisher, props.book.publishedDate, "START")} 
                            className="border-4 border-light-brown rounded-lg w-5/12 h-6 sm:h-12 text-dark-brown text-center mx-auto my-4 sm:my-6 text-sm sm:text-xl font-serif bg-green-600 hover:bg-green-500">Add Book
                        </button>      
                    </div>
                </div> 
            </div>  
        </section>  
    )
}

export default Modal