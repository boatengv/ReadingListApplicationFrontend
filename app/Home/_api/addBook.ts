export const addBook = (studentId: string, title: string, thumbnail: string, authors: string, categories: string, pageCount: number, publisher: string, publishedDate: string, state: string, description: string) => {
    
    fetch(`http://localhost:8080/api/AddBook?studentId=${studentId}&title=${title}&thumbnail=${encodeURIComponent(thumbnail)}&authors=${authors}&categories=${categories}&page_count=${pageCount}&publisher=${publisher}&publishedDate=${publishedDate}&state=${state}&description=${description}&timestamp=${Date.now()}`,{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          }
    })

}

