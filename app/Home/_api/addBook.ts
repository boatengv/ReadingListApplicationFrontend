export const addBook = (bookId: string, studentId: string, title: string, authors: string, publisher: string, publishedDate: string,  pageCount: number,  category: string, description: string, thumbnail: string) => {

    fetch(`http://localhost:8080/api/AddBook?bookId=${bookId}&studentId=${studentId}&title=${title}&authors=${authors}&publisher=${publisher}&publishedDate=${publishedDate}&pageCount=${pageCount}&category=${category}&description=${description}&thumbnail=${encodeURIComponent(thumbnail)}&timestamp=${Date.now()}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
}

