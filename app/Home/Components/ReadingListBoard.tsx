import React, { useState } from 'react'
import ReadListColumn from './ReadListColumn'
import { Book } from '../interface/Book'
import Swal from 'sweetalert2'

interface Props{
    studentId: string,
    books: Book[],
    sortType: string
}

const ReadingListBoard = (props:Props) => {

    const changeState = (studentId:string, bookId:string, state:"START" | "PROGRESS" | "DONE") => {
        fetch(`http://localhost:8080/api/ChangeBookState?bookId=${bookId}&studentId=${studentId}&state=${state}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
    };

    const removeBook = (studentId:string, bookId:string, bookTitle:string) => {
        Swal.fire({
            title: `Are you sure you want to remove ${bookTitle} from Reading Board`,
            text: 'Please click continue to Delete',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Continue',
            denyButtonText: 'Cancel', 
        })
        .then((result) => {
            if(result.isConfirmed){            
                fetch(`http://localhost:8080/api/RemoveBook?studentId=${studentId}&bookId=${bookId}`,{
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }) 
                Swal.fire(`${bookTitle} has been removed`, "", "success");  
            } 
        })
    };

    const sortBy = (sortType: string, books: Book[]) => {

        switch(sortType){
            case "alphabetic ascending":
                books.sort((a, b) => {
                    const bookA = a.title.toUpperCase(); // ignore upper and lowercase
                    const bookB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (bookA < bookB) {
                    return -1;
                    }
                    if (bookA > bookB) {
                    return 1;
                    }
                    // names must be equal
                    return 0;
                });
                return props.books
            case "alphabetic descending":
                books.sort((a, b) => {
                    const bookA = a.title.toUpperCase(); // ignore upper and lowercase
                    const bookB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (bookB < bookA) {
                    return -1;
                    }
                    if (bookB > bookA) {
                    return 1;
                    }
                
                    // names must be equal
                    return 0;
                });
                return props.books
            case "newest":
                books.sort((bookA, bookB) =>  bookB.timestamp - bookA.timestamp);
                return props.books
            case "oldest":
                books.sort((bookA, bookB) =>  bookA.timestamp - bookB.timestamp);
                return props.books
            default:
                return props.books
        }


    }
  
    return (
    <>
        <div className="grid grid-cols-3 gap-0.5">
            <ReadListColumn
                columnTitle="START"
                studentId={props.studentId}
                book={props.books.filter(books => books.state === "START")}
                changeState={changeState}
                removeBook={removeBook}
            />

            <ReadListColumn
                columnTitle="PROGRESS"
                studentId={props.studentId}
                book={props.books.filter(books => books.state === "PROGRESS")}
                changeState={changeState}
                removeBook={removeBook}
            />

            <ReadListColumn
                columnTitle="DONE"
                studentId={props.studentId}
                book={sortBy(props.sortType, props.books).filter(books => books.state === "DONE")}
                changeState={changeState}
                removeBook={removeBook}
            />
        </div>
    </>
  )
}

export default ReadingListBoard