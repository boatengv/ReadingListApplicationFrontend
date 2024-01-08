export interface Book{
    authors: string,
    bookId: string,
    imageUrlLarge: string,
    imageUrlMedium: string,
    imageUrlSmall: string,
    isbn: string,
    publishedDate: string,
    state: "START" | "PROGRESS" | "DONE"
    subtitle: string,
    title: string
}