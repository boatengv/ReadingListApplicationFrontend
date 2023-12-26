import '../css/ReadListItem.css'
import Box from '@mui/material/Box';
import { useState } from 'react'


export const ReadListItem = ({book, onStateChange}) => {
    
    const [open, setOpen] = useState(false)
    const {bookId, title, subtitle, author, state, imageUrlLarge, publishedDate} = book;

    return(
        <div className="BookItem" onClick={()=> setOpen(!open)}>
            
            <img className='BookItemImage' src={imageUrlLarge} alt="Logo"/>
            <p>{title}<br/>{subtitle}<br/>{author}<br/>{publishedDate}</p>

            {open && 
            <>
                {state !== "START" &&
                    <Box
                        sx={{
                        bgcolor: 'background.paper',     
                        border: 'black',      
                        p: 2,
                        minWidth: 10,
                        maxWidth: 75
                        }}
                        onClick={() => onStateChange(bookId,"START")}
                    >   
                        MOVE TO START
                    </Box>
                }
                {state !== "PROGRESS" &&
                    <Box
                        sx={{
                        bgcolor: 'background.paper',    
                        p: 2,
                        minWidth: 10,
                        maxWidth: 75
                        }}
                        onClick={() => onStateChange(bookId,"PROGRESS")}
                    >   
                        MOVE TO PROGRESS
                    </Box>
                }
                {state !== "DONE" &&
                    <Box
                        sx={{
                        bgcolor: 'background.paper',
                        p: 2,
                        minWidth: 10,
                        maxWidth: 75
                        }}
                        onClick={() => onStateChange(bookId,"DONE")}
                    >   
                        MOVE TO DONE
                    </Box>
                }
            </>}
        </div>  
    )
}