import React from 'react'

const Filter = () => {
  return (
    <div className="" style={{"height":"920px"}}>
        <div className="relative w-11/12 mx-auto border-2 border-black mt-20 mb-4 bg-gray-300" style={{"height":"820px"}}>
            <h1 className="text-4xl font-serif font-bold text-center w-full mt-2 h-16 border-b-2 border-black">Filter By</h1>
            <div className="w-72 mx-auto absolute inset-x-0 bottom-0 mb-4">
              <button className="bg-blue-600 text-4xl font-bold w-72 rounded-3xl border-2 border-black py-2 hover:bg-blue-400">Submit</button>
            </div>
        </div> 
    </div> 
  )
}

export default Filter