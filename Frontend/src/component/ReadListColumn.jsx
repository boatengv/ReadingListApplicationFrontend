import '../css/ReadListColumn.css'
import { ReadListItem } from './ReadListItem'
import { useState } from 'react';
import Modal from 'react-modal';


export const ReadListColumn = ({studentId, state, data, onStateChange}) => {   

    const [modalIsOpen, setIsOpen] = useState(false);
    const [isbn, setISBN] = useState("")

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        console.log("studentId = {}, isbn = {}, state = {}",studentId, isbn, state);
        fetch(`http://localhost:8080/api/AddBook?studentId=${studentId}&isbn=${isbn}&state=${state}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const handleISBN = (e) => {
        setISBN(e.target.value);
    }

    return(    
        <div>
            <h1 className="state">{state} <button className="AddButton" onClick={openModal}>+</button></h1>
            {data.map((book) => (
                <ReadListItem 
                    key={book.bookId} 
                    book={book}
                    onStateChange={onStateChange}
                />       
            ))}  
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <h2>Enter the ISBN of the book you would like to add</h2>
                <form onSubmit={handleSubmit}>
                    <label>isbn
                        <input type="text" value={isbn} onChange={handleISBN}></input>
                    </label>
                    <button type="Submit">Submit</button>
                </form>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    )
}