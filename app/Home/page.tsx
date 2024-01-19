'use client';
import { useEffect, useState } from "react";
import { Book } from "./Book";
import ReadListColumn from "./ReadListColumn"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';


interface Request {
    studentId: string
}

const ReadList = ({searchParams}: {searchParams: Request}) => {

    const [books, setBooks] = useState<Book[]>([]);
    const [isbn, setISBN] = useState(""); 
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
            console.log(data);
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

    const handleISBN = (e: { target: { value: React.SetStateAction<string> } }) => {
        setISBN(e.target.value);
        console.log(e.target.value);
    }

    const addBook = () => {
        fetch(`http://localhost:8080/api/AddBook?studentId=${searchParams.studentId}&isbn=${isbn}&state=${"START"}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            {/* if book cannot be added*/}
            if(!data){
                toast.error('Book could not be found, please try another ISBN', {
                    position: "top-center",
                    theme: "dark"
                });
            }
        })
        .catch((err) => {

        })
    }

    const logout = () => {
        fetch(`http://localhost:8080/api/Logout/${searchParams.studentId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    return ( 
        <> 
            <div className="flex justify-between m-2 shadow-lg pt-0.5 p-4 bg-zinc-300 sticky top-0">
                <div className="mt-2">
                    <input type="text" value={isbn} onChange={handleISBN} placeholder="Enter ISBN" className="!outline-none border-b-2 border-blue-600 rounded-l-xl w-72 p-2"></input>
                    <button type="submit" onClick={addBook} className="w-24 bg-blue-600 hover:bg-blue-400 text-white border-b-2 border-blue-600 rounded-e-xl p-2">Add Book</button>
                </div>
                <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:w-16 cursor-pointer mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
            </div>    
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
        </> 
    )
}

export default ReadList