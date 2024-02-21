'use client';
import React from 'react'
import Image from 'next/image'


interface ReadListItemProps{
  studentId: string
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
  changeState: (studentId:string, bookId:string, newState: "START" | "PROGRESS" | "DONE") => void
  removeBook: (studentId:string, bookId:string) => void
}

const ReadListItem = (props:ReadListItemProps) => {

  return (
    <div className="border-2 border-black rounded-xl h-80 overflow-hidden text-ellipsis">
      {
        props.state === "START" &&
        <div className="flex justify-between">
           <svg onClick={() => props.removeBook(props.studentId, props.bookId)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-crosshair">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <svg onClick={() => props.changeState(props.studentId, props.bookId, "PROGRESS")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-end cursor-e-resize">
            <path  strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg> 
        </div>
      } 
      {
        props.state === "PROGRESS" &&
        <div className="flex justify-between">
          <svg onClick={() => props.changeState(props.studentId, props.bookId, "START")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-w-resize">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg> 
          <svg onClick={() => props.removeBook(props.studentId, props.bookId)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-crosshair">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
         <svg onClick={() => props.changeState(props.studentId, props.bookId, "DONE")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-e-resize">
            <path  strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg> 
        </div>
      }
      {
        props.state === "DONE" &&
        <div className="flex justify-between">
          <svg onClick={() => props.changeState(props.studentId, props.bookId, "PROGRESS")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-w-resize">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg> 
          <svg onClick={() => props.removeBook(props.studentId, props.bookId)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-crosshair">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      }

      <img src={props.thumbnail} className="object-contain h-48 w-full"></img>
      <h1 className="text-center">{props.title}</h1>
      <h1 className="text-center">{props.authors}</h1>
      <h1 className="text-center ">{props.publishedDate}</h1> 
    </div>
  ) 
}

export default ReadListItem