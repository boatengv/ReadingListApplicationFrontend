import { ImageLinks } from "./ImageLinks"

export interface newBook{
    title: string,
    imageLinks: ImageLinks,
    description: string,
    authors: [], 
    categories: [], 
    pageCount: number, 
    publisher:string, 
    publishedDate: string,
}