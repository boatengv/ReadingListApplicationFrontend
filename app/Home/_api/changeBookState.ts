export const changeState = (studentId:string, bookId:string, state:"START" | "PROGRESS" | "DONE") => {
    fetch(`http://localhost:8080/api/ChangeBookState?bookId=${bookId}&studentId=${studentId}&state=${state}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    })
};
