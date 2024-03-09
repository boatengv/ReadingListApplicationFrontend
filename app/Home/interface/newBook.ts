import { ImageLinks } from "./ImageLinks"

export interface newBook{
    id: string,
    title: string,
    imageLinks: ImageLinks,
    description: string,
    authors: [], 
    categories: [], 
    pageCount: number, 
    publisher:string, 
    publishedDate: string,
}