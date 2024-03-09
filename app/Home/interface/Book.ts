export interface Book{
    bookId: string,
    title: string,
    thumbnail: string,
    description: string,
    authors: string, 
    category: string, 
    pageCount: number, 
    publisher:string, 
    publishedDate: string,
    state: "START" | "PROGRESS" | "DONE", 
    timestamp: number,
    avg_review: number
}  