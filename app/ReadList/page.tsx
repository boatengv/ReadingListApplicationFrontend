'use client';
import { useState } from "react";
import { Book } from "./Book";
import ReadListColumn from "./ReadListColumn"
import booksJSON from './test.json'


const ReadList = () => {

    const [books, setBooks] = useState<Book[]>(booksJSON as Book[]);


    const changeState = (bookId:string, newState: "START" | "PROGRESS" | "DONE") => {
        console.log("I have made it")
        console.log("bookId is",bookId)
        console.log("newState is",newState)
        const updateBooks = books.map(book => {
            if (book.bookId === bookId) {
                return {...book, state: newState};
            }
            console.log(books)
            return book;
        });
        setBooks(updateBooks);
    };

    return ( 
        <>
            <div>
                <div className="flex flex-row-reverse m-4">
                    <button type="submit" className="border-2 border-black bg-blue-700 w-44 rounded-md">Add Book</button>
                    <input type="text" placeholder="Enter ISBN" className="border-2 border-black mr-2 w-72 rounded-md"></input>
                </div>
            </div> 
            <div className="grid grid-cols-3 gap-4 mt-10">
                <ReadListColumn
                    columnTitle="START"
                    book={books.filter(books => books.state === "START")}
                    changeState={changeState}
                />

                <ReadListColumn
                    columnTitle="PROGRESS"
                    book={books.filter(books => books.state === "PROGRESS")}
                    changeState={changeState}
                />

                <ReadListColumn
                    columnTitle="DONE"
                    book={books.filter(books => books.state === "DONE")}
                    changeState={changeState}
                />
            </div>
        </> 
    )
}

export default ReadList