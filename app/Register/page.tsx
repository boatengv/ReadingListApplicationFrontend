import Logo from "../components/Logo";
import RegisterForm from "./RegisterForm";
import Image from 'next/image'

const Register = () => {
    
    return (
        <div className="h-screen">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/front-view-books-with-copy-space.jpg"
                    quality={100}
                    alt=""
                    fill          
                />     
            </div>
            <Logo/>
            <RegisterForm/>
        </div>  
    )
}

export default Register;