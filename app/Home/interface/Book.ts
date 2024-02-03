import { ImageLinks } from "./ImageLinks";

export interface Book{
    bookId: string,
    title: string,
    thumbnail: string,
    description: string,
    authors: string, 
    categories: string, 
    pageCount: number, 
    publisher:string, 
    publishedDate: string,
    state: "START" | "PROGRESS" | "DONE"    
}