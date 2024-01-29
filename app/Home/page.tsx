'use client';
import { useEffect, useState } from "react";
import { Book } from "./Book";
import ReadListColumn from "./ReadListColumn"
import { useRouter } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import NavBar from "./NavBar";


interface Request {
    studentId: string
}

const ReadList = ({searchParams}: {searchParams: Request}) => {

    const [books, setBooks] = useState<Book[]>([]);
    const route = useRouter();

    useEffect(() => {
        fetch(`http://localhost:8080/api/GetLogin/${searchParams.studentId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(!data){
                route.push('/Login')
            } 
        })
        .catch((err) => {
            console.log(err);
        })

        fetch(`http://localhost:8080/api/GetStudentBookList/${searchParams.studentId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setBooks(data)
        })
        .catch((err) => {
            console.log(err);
        })
    })

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
        <div className="border-2 border-black h-svh bg-light-brown"> 
            <NavBar studentId={searchParams.studentId}/>
            <div className="grid grid-cols-3 gap-0.5 mt-10">
                <ReadListColumn
                    columnTitle="START"
                    studentId={searchParams.studentId}
                    book={books.filter(books => books.state === "START")}
                    changeState={changeState}
                    removeBook={removeBook}
                />

                <ReadListColumn
                    columnTitle="PROGRESS"
                    studentId={searchParams.studentId}
                    book={books.filter(books => books.state === "PROGRESS")}
                    changeState={changeState}
                    removeBook={removeBook}
                />

                <ReadListColumn
                    columnTitle="DONE"
                    studentId={searchParams.studentId}
                    book={books.filter(books => books.state === "DONE")}
                    changeState={changeState}
                    removeBook={removeBook}
                />
            </div>
            <ToastContainer/>
        </div> 
    )
}

export default ReadList