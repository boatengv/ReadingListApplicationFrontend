'use client';
import { useEffect, useState } from "react";
import { Book } from "./interface/Book";
import { useRouter } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import Filter from "./Components/Filter";
import ReadingListBoard from "./Components/ReadingListBoard";
import Navbar from "./Components/Navbar";


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

    
    return ( 
        <div className="h-dvh flex flex-col"> 
            <Navbar studentId={searchParams.studentId}/> 
            <div className="grid grid-cols-10" style={{"height":"720px"}}>
                <div className="col-span-2">
                    <Filter/>
                </div>
                <div className="col-span-8">
                    <ReadingListBoard studentId={searchParams.studentId} books={books}/>
                </div>      
            </div>
            <ToastContainer/>
        </div> 
    )
}

export default ReadList