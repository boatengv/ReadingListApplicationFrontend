'use client';
import React from 'react'

interface Props{
  bookId: string
  imageUrl: string,
  title: string, 
  subtitle: string, 
  author: string,
  publishDate: string,
  state: "START" | "PROGRESS" | "DONE"
  changeState: (bookId:string, newState: "START" | "PROGRESS" | "DONE") => void
}

const ReadListItem = (props:Props) => {

 

  return (
    <div className="border-2 border-black"> 
    
      {
        props.state === "START" &&
        <svg onClick={() => props.changeState(props.bookId, "PROGRESS")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-end cursor-e-resize">
          <path  strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg> 
      } 
      {
        props.state === "PROGRESS" &&
        <>
          <svg onClick={() => props.changeState(props.bookId, "DONE")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-end cursor-e-resize">
            <path  strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg> 
          <svg onClick={() => props.changeState(props.bookId, "START")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-start cursor-w-resize">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg> 
        </>
      }
      {
        props.state === "DONE" &&
        <svg onClick={() => props.changeState(props.bookId, "PROGRESS")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-start cursor-w-resize">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg> 
      }

      <div className="">
          <img src={props.imageUrl} className="object-cover h-68 w-full"></img>
      </div>
      <h1 className="text-center">{props.title}</h1>
      <h1 className="text-center">{props.subtitle}</h1>
      <h1 className="text-center">{props.author}</h1>
      <h1 className="text-center">{props.publishDate}</h1>  
    </div>
  ) 
}

export default ReadListItem