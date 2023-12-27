import '../css/ReadList.css'
import { ReadListColumn } from "./ReadListColumn"
import { useEffect, useState } from 'react'

export const ReadList = (props) => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`${props.url}/api/GetStudentBookList/${props.studentId}`, {
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
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    })

    const changeBookState = (bookId, newState) => {   
        fetch(`${props.url}/api/UpdateBookState?studentId=${props.studentId}&bookId=${bookId}&newState=${newState}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
    };

    return (        
        <div className="grid-container">
            <div className="item1" id="start">
                <ReadListColumn
                    url={props.url} 
                    studentId={props.studentId}
                    state={"START"} 
                    data={books.filter(books => books.state === "START")}
                    onStateChange={changeBookState}
                />
            </div>
            <div className="item2" id="progress"> 
                <ReadListColumn 
                    url={props.url} 
                    studentId={props.studentId}
                    state={"PROGRESS"} 
                    data={books.filter(books => books.state === "PROGRESS")}
                    onStateChange={changeBookState}
            />
            </div>
            <div className="item3" id="done">
                <ReadListColumn 
                    url={props.url} 
                    studentId={props.studentId}
                    state={"DONE"} 
                    data={books.filter(books => books.state === "DONE")}
                    onStateChange={changeBookState}
            />
            </div>
        </div>
    )
}