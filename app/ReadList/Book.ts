export interface Book{
    bookId: string,
    imageUrl: string,
    title: string, 
    subtitle: string, 
    author: string,
    publishDate: string,
    state: "START" | "PROGRESS" | "DONE"
}