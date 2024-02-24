import Swal from 'sweetalert2';

export const removeBook = (studentId:string, bookId:string) => {
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