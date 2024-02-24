export const changeState = (studentId:string, bookId:string, newState:"START" | "PROGRESS" | "DONE") => {
    fetch(`http://localhost:8080/api/UpdateBookState?studentId=${studentId}&bookId=${bookId}&newState=${newState}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    })
};
