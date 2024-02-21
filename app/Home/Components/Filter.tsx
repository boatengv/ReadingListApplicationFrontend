import { Accordion, AccordionItem, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import React, { useState } from 'react'
import { listOfCategories } from '../Categories';

interface Props{
  filterByColumn: (column:string) => void,
  filterBySearch: (query:string) => void,
  filterByCategories: (categoryList: Map<string, boolean>) => void
}

const Filter = (props: Props) => {

  const [searchColumn, setSearchColumn] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("")
  const categoriesWithBool: Map<string, boolean> = listOfCategories
  const [searchCategories, setSearchCategories] = useState<Map<string, boolean>>(categoriesWithBool);
  
  const filterByColumn = (column: string) => {
    setSearchColumn(column);
    props.filterByColumn(column);
  }  

  const filterBySearch = (e: {target: {value: string}}) => {
    setSearchQuery(e.target.value);
    props.filterBySearch(e.target.value);
  }

  const filterByCategories = (e: {target: any}) => {
    searchCategories.set(e.target.value, e.target.checked)
    props.filterByCategories(searchCategories)
  }

  return (
    <>
        <div className="relative w-11/12 mx-auto border-2 border-black mt-10 mb-4 bg-gray-300" style={{"height":"860px"}}>
            <h1 className="text-4xl font-serif font-bold text-center w-full mt-2 h-16 border-b-2 border-black">Filter By</h1>

            {/*Search ReadingList */}
            <div className='w-fit mx-auto mt-8 h-10 rounded-xl overflow-hidden border-b-2 border-blue-600'>
                <input value={searchQuery} onChange={filterBySearch} className="!outline-none h-full text-center text-md" placeholder="Search Reading List"></input>
                <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        color="primary"
                        variant="solid"
                        radius='none'
                        className="h-full"
                      >
                        {searchColumn}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">                      
                      <DropdownItem onClick={() => filterByColumn("ALL")} key="all">ALL</DropdownItem>
                      <DropdownItem onClick={() => filterByColumn("START")} key="start">START</DropdownItem>
                      <DropdownItem onClick={() => filterByColumn("PROGRESS")} key="progress">PROGRESS</DropdownItem>
                      <DropdownItem onClick={() =>  filterByColumn("DONE")} key="done">DONE</DropdownItem>                  
                    </DropdownMenu>
                </Dropdown>
            </div>

            {/*Filters*/}
            <div className="mt-12">
              <Accordion>
                <AccordionItem key="1" aria-label="Accordion 1" title="Sort By">
                
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Categories">
                  <ul>
                    {Array.from(listOfCategories).map(([key,value]: [string,boolean]) => (
                        <li key={key}>
                          {key}
                          <input value={key} type="checkbox" checked={value} onChange={filterByCategories}></input>
                        </li>    
                    ))}
                  </ul>
                </AccordionItem>
              </Accordion>
            </div>
        </div> 
    </> 
  )
}

export default Filter