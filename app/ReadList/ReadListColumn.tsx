'use client';
import React from 'react'
import ReadListItem from './ReadListItem'
import { Book } from './Book'

interface Props {
  columnTitle: string
  book: Book[]
  changeState: (bookId:string, newState: "START" | "PROGRESS" | "DONE") => void
}

const ReadListColumn = (props:Props) => {
  console.log(props.book)

  return (
    <div className="border-2 border-black mx-2 pb-4">
      <h1 className="border-2 border-b-black text-center font-serif text-3xl py-4">{props.columnTitle}</h1> 
        <div className="grid grid-cols-2 gap-2 px-2 pt-4">  
          {props.book.map((book) => (
            <ReadListItem
              key={book.bookId}
              bookId={book.bookId}
              imageUrl={book.imageUrl}
              title={book.title}
              subtitle={book.subtitle}
              author={book.author}
              publishDate={book.publishDate}
              state={book.state}
              changeState={props.changeState}
            />
          ))}
        </div>
    </div>
  )
}

export default ReadListColumn