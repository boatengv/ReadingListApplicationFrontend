import '../css/HomePage.css'
import { ReadList } from "../component/ReadList"
import { useLocation } from 'react-router-dom';
 

export const HomePage = () => {

    const location = useLocation();

    console.log("The student Id in Home page is",location.state.key)
    
    return (
        <div className="Board">
           <ReadList studentId={location.state.key}/> 
        </div>       
    )
}