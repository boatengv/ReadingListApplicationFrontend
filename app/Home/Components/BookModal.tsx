'use client';
import React, { useState } from 'react'
import { newBook } from '../interface/newBook';
import { addBook } from '../_api/addBook';

interface ModalProps{
    book: newBook,
    studentId: string
    closeModal: () => void;
}

const BookModal = (props: ModalProps) => {

    return ( 
        <section className="fixed top-0 right-0 bottom-0 left-0 bg-black-rgba flex items-center justify-center">
            <div className='flex flex-row absolute w-1/2 h-4/6 h left-6/10 transform -translate-x-1/2 bg-gray-300 border-4 border-black'>
                <div className='basis-1/4 border-r-2 border-black w-48 pt-2'>
                    <div className="w-40 h-2/5 mx-auto mb-6">
                        <img
                            src={props.book?.imageLinks?.smallThumbnail}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='w-full h-1/2 overflow-auto overscroll-auto'>
                        {props.book.authors &&
                        <div className='py-1'>
                            <h1 className='text-black text-center font-bold'>Author(s):</h1>
                            <p className='text-black text-center'>{props.book.authors.join(', ')}</p> 
                        </div>
                        }
                        {props.book.pageCount &&
                        <div className='py-1'>
                            <h1 className='text-black text-center font-bold'>Pages:</h1> 
                            <p className='text-black text-center'>{props.book.pageCount}</p> 
                        </div>
                        }
                        {props.book.categories &&
                        <div className='py-1'>
                            <h1 className='text-black text-center font-bold'>Categories:</h1>
                            <p className='text-black text-center'>{props.book.categories.join(', ')}</p> 
                        </div>
                        }
                        {props.book.publisher &&
                        <div className='py-1'>
                            <h1 className='text-black text-center font-bold'>Publisher:</h1>  
                            <p className='text-black text-center'>{props.book.publisher}</p> 
                        </div>
                        }
                        {props.book.publishedDate &&
                        <div className='py-1'>
                            <h1 className='text-black text-center font-bold'>Published Date:</h1> 
                            <p className='text-black text-center'>{props.book.publishedDate}</p> 
                        </div>
                        }
                    </div>       
                </div>
                <div className='basis-3/4 w-80'>
                    <div className="w-full overflow-x-auto border-b-4 border-black">
                        <h1 className='text-3xl text-black p-4 font-bold h-16 overflow-x-hidden' style={{"width":`${props.book.title.length * 22}px`}}>{props.book.title}</h1>
                    </div>
                    <p className='text-black text-md p-4 w-full overflow-auto' style={{"height":"75%"}}>{props.book.description}</p> 
                    <div className='flex flex-row border-t-4 border-black'>
                        <button type="submit" onClick={props.closeModal} className="border-4 border-black rounded-lg w-5/12 h-6 sm:h-12 text-dark-brown text-center mx-auto my-4 sm:my-6 text-sm sm:text-xl font-serif bg-red-600 hover:bg-red-400">Close</button>      
                        <button 
                            type="submit" 
                            onClick={() => addBook(props.studentId, props.book.title, props.book.imageLinks.thumbnail, props.book.authors.join(","), props.book.categories.join(", "), props.book.pageCount, props.book.publisher, props.book.publishedDate, "START")} 
                            className="border-4 border-black rounded-lg w-5/12 h-6 sm:h-12 text-dark-brown text-center mx-auto my-4 sm:my-6 text-sm sm:text-xl font-serif bg-green-600 hover:bg-green-400">Add Book
                        </button>      
                    </div>
                </div> 
            </div>  
        </section>  
    )
}

export default BookModal;