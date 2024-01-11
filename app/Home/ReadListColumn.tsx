'use client';
import React from 'react'
import ReadListItem from './ReadListItem'
import { Book } from './Book'

interface Props {
  columnTitle: string
  studentId: string
  book: Book[]
  changeState: (studentId:string, bookId:string, newState: "START" | "PROGRESS" | "DONE") => void
  removeBook: (studentId:string, bookId:string) => void
}

const ReadListColumn = (props:Props) => {
  console.log(props.book)

  return (
    <div className="border-2 border-black mx-2 pb-4 bg-zinc-300">
      <h1 className="border-2 border-b-black text-center font-serif text-3xl py-4">{props.columnTitle}</h1> 
        <div className="grid grid-cols-2 gap-2 px-2 pt-4">  
          {props.book.map((book) => (
            <ReadListItem
              studentId={props.studentId}
              key={book.bookId}
              bookId={book.bookId}
              imageUrlLarge={book.imageUrlLarge}
              title={book.title}
              authors={book.authors}
              publishedDate={book.publishedDate}
              state={book.state}
              changeState={props.changeState}
              removeBook={props.removeBook}
            />
          ))}
        </div>
    </div>
  )
}

export default ReadListColumn