'use client';
import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/react"; 
import {Textarea} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import Rating from '@mui/material/Rating';


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
  removeBook: (studentId:string, bookId:string, bookTitle:string) => void
}

const ReadListItem = (props:ReadListItemProps) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentTab, setCurrentTab] = useState("Description");
  const [onRate, setOnRate] = useState(false)

  const selectedTab = (selectedTab: any) => {
    setCurrentTab(selectedTab)
  }

  const handleRating = (onRate: boolean) => {
    if(!onRate){
      setOnRate(!onRate)
    }
    console.log(onRate)
  }

  return (
    <div className="border-2 border-black rounded-xl h-80 overflow-hidden text-ellipsis">
      {
        props.state === "START" &&
        <div className="flex justify-between">
           <svg onClick={() => props.removeBook(props.studentId, props.bookId, props.title)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-crosshair">
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
          <svg onClick={() => props.removeBook(props.studentId, props.bookId, props.title)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-crosshair">
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
          <svg onClick={() => props.removeBook(props.studentId, props.bookId, props.title)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-crosshair">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      }

      <img src={props.thumbnail} className="object-contain h-48 w-full cursor-pointer hover:object-cover" onClick={onOpen}></img>
      <h1 className="text-center">{props.title}</h1>
      <h1 className="text-center">{props.authors}</h1>
      <h1 className="text-center ">{props.publishedDate}</h1> 
      <div className='w-full'>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"3xl"}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  <div className='flex items-center mx-auto'>
                    <div className='mx-6'>
                      {props.title}<br/>{props.authors}<br/>[{props.publishedDate}]
                    </div>
                    <div className='mx-6'>
                      <img src={props.thumbnail} className="object-contain h-32"></img>
                    </div>
                  </div>
                </ModalHeader>
                <ModalBody>
                    <Tabs key={"solid"} variant={"underlined"} aria-label="Tabs variants" className='mx-auto' onSelectionChange={selectedTab}>
                      <Tab key="Description" title="Description"/>
                      <Tab key="Notes" title="Notes"/>
                      <Tab key="Comments" title="Comments"/>
                      {/* Audio book */}
                      {/* <Tab key="Similar books" title="Videos"/> */}
                    </Tabs>
                    <div className='flex mx-auto'>
                      {!onRate ? <Rating value={0} size="large" className='mx-2'  readOnly/> : <Rating value={0} size="large" className='mx-2'/>}
                      {!onRate && <Button 
                        color='primary' 
                        className='w-12 mx-2'
                        onClick={() => handleRating(onRate)}
                      >
                          Rate
                        </Button>}
                    </div>
                     
                    <Divider className='my-4'></Divider>
                  
                    {
                    currentTab == "Description" 
                    && <p>{props.description}</p>
                    }

                    {
                      currentTab == "Notes"
                      &&  
                      <Textarea
                        isDisabled
                        label="Notes"
                        labelPlacement="outside"
                        placeholder="Enter Your Notes"
                        defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                        fullWidth
                      />
                    }

                    {
                      currentTab == "Comments"
                      && 
                      <>
                        <Textarea
                          isDisabled
                          label="Comment"
                          labelPlacement="outside"
                          placeholder="Enter Your Notes"
                          defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                          fullWidth
                        />
                      </>
                      
                    }
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div> 
    </div>
  ) 
}

export default ReadListItem