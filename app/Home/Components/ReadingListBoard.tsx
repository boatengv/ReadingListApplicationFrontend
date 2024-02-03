import React from 'react'
import ReadListColumn from './ReadListColumn'
import { Book } from '../interface/Book'
import Swal from 'sweetalert2'
import SearchBar from './SearchBar'

interface Props{
    studentId: string,
    books: Book[],
}

const ReadingListBoard = (props:Props) => {
  
    const changeState = (studentId:string, bookId:string, newState:"START" | "PROGRESS" | "DONE") => {
        fetch(`http://localhost:8080/api/UpdateBookState?studentId=${studentId}&bookId=${bookId}&newState=${newState}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
    };

    const removeBook = (studentId:string, bookId:string) => {
        Swal.fire({
            title: 'Are you sure you want to delete book',
            text: 'Please click continue to delete',
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
                Swal.fire("Book has been Deleted", "", "success");  
            } 
        })
    };
  
    return (
    <>
        <SearchBar studentId={props.studentId}/>

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
                book={props.books.filter(books => books.state === "DONE")}
                changeState={changeState}
                removeBook={removeBook}
            />
        </div>
    </>
  )
}

export default ReadingListBoard