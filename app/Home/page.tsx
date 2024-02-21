'use client';
import { useEffect, useState } from "react";
import { Book } from "./interface/Book";
import { useRouter } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import Filter from "./Components/Filter";
import ReadingListBoard from "./Components/ReadingListBoard";
import Navbar from "./Components/Navbar";
import { listOfCategories } from "./Categories";
import SearchBar from "./Components/SearchBar";

interface Request {
    studentId: string
}

const ReadList = ({searchParams}: {searchParams: Request}) => {

    const [books, setBooks] = useState<Book[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);    
    const [searchQuery, setSearchQuery] = useState("")
    const [currentFilterColumn, setCurrentFilterColumn] = useState("ALL");    
    const [CurrentFilterCategories, setCurrentFilterCategories] = useState<Map<string, boolean>>(listOfCategories)
    const route = useRouter();

    useEffect(() => {

        {/*Get the user Book List */}
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
            setBooks(data);
        })
        .catch((err) => {
            console.log(err);
        })
    })

    useEffect(() => {
        // Apply filtering whenever books state changes
        filterByColumn(currentFilterColumn);
        filterByCategories(CurrentFilterCategories);
    }, [books]); // Add books as a dependency


    const filterByColumn = (column: string) => {

        setCurrentFilterColumn(column);

        switch(column){
            case "ALL": 
                setFilteredBooks(books.filter((book) => (book.state === "START" || book.state === "PROGRESS" || book.state === "DONE") && book.title.includes(searchQuery) && CurrentFilterCategories.get(book.categories.trim())))
                break;
            case "START":
                setFilteredBooks(books.filter((book) => book.state === "START" && book.title.includes(searchQuery) && CurrentFilterCategories.get(book.categories.trim())))
                break;
            case "PROGRESS":
                setFilteredBooks(books.filter((book) => book.state === "PROGRESS" && book.title.includes(searchQuery) && CurrentFilterCategories.get(book.categories.trim())))
                break;
            case "DONE":
                setFilteredBooks(books.filter((book) => book.state === "DONE" && book.title.includes(searchQuery) && CurrentFilterCategories.get(book.categories.trim())))
                break;
        }
    }  
    

    const filterByCategories = (categoryList: Map<string, boolean>) => {

        setCurrentFilterCategories(categoryList);

        switch(currentFilterColumn){
            case "ALL": 
                setFilteredBooks(books.filter((book) => (book.state === "START" || book.state === "PROGRESS" || book.state === "DONE") && book.title.includes(searchQuery) && categoryList.get(book.categories.trim())))
                break;
            case "START":
                setFilteredBooks(books.filter((book) => book.state === "START" && book.title.includes(searchQuery) && categoryList.get(book.categories.trim())))
                break;
            case "PROGRESS":
                setFilteredBooks(books.filter((book) => book.state === "PROGRESS" && book.title.includes(searchQuery) && categoryList.get(book.categories.trim())))
                break;
            case "DONE":
                setFilteredBooks(books.filter((book) => book.state === "DONE" && book.title.includes(searchQuery) && categoryList.get(book.categories.trim())))
                break;
        }
    }  

    const filterBySearch = (query: string) => {
        setSearchQuery(query)
    }  

    return ( 
        <div className="h-dvh flex flex-col"> 
            <Navbar studentId={searchParams.studentId}/> 
            <div className="grid grid-cols-10" style={{"height":"720px"}}>
                <div className="col-span-2">
                    <Filter filterByColumn={filterByColumn} filterBySearch={filterBySearch} filterByCategories={filterByCategories}/>
                </div>
                <div className="col-span-8">
                    <SearchBar studentId={searchParams.studentId}/>
                    <ReadingListBoard studentId={searchParams.studentId} books={filteredBooks}/>
                </div>      
            </div>
            <ToastContainer/>
        </div> 
    )
}

export default ReadList