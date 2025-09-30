
import "../App.css";
import { useNavigate } from "react-router";

const Navbar = () => {
    
    const navigate = useNavigate();

    return (
        <nav className="p-3 flex justify-between items-center fixed top-0 z-99 " >
            <img 
                onClick={() => {navigate("/")}}
                src="ChatGPT Image Sep 28, 2025, 08_46_30 PM.png"
                alt="LucyAI" 
                className="w-12 sm:w-16 lg:w-16 rounded-[50%] hover:translate-x-[1rem] cursor-pointer duration-400 ease-in-out " 
            />
        </nav>
    );
}

export default Navbar;
