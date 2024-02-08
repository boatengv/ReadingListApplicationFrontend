'use client';
import React from 'react'
import ReadListItem from './ReadListItem'
import { Book } from '../interface/Book'

interface Props {
  columnTitle: string
  studentId: string
  book: Book[]
  changeState: (studentId:string, bookId:string, newState: "START" | "PROGRESS" | "DONE") => void
  removeBook: (studentId:string, bookId:string) => void
}

const ReadListColumn = (props:Props) => {

  return (
    <div className="mx-2 pb-4 mb-2">
      <h1 className="border-b-2 border-2 border-black rounded-3xl text-center text-dark-brown font-serif text-3xl py-4">{props.columnTitle}</h1> 
        <div className="grid grid-cols-2 gap-2 px-2 pt-4">  
          {props.book.map((book) => (
            <ReadListItem
              studentId={props.studentId}
              key={book.bookId}
              bookId={book.bookId}
              thumbnail={book.thumbnail}
              title={book.title}
              authors={book.authors}
              publishedDate={book.publishedDate}
              state={book.state}
              description={book.description} 
              categories={book.categories} 
              pageCount={book.pageCount} 
              publisher={book.publisher}  
              changeState={props.changeState}
              removeBook={props.removeBook} 
              />
          ))}
        </div>
    </div>
  )
}

export default ReadListColumn