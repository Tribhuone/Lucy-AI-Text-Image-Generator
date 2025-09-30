
import "../App.css";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Header = () => {

    const navigate = useNavigate();

    const startChat = () => {
        navigate("/chat"); // update route to your chat page
    }

    const generateImg = () => {
        navigate("/generate");
    }

    return (
        <motion.div 
            initial={{ opacity: 0.1, y: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center text-center my-30 h-50dvh lg:h-[62dvh] max-sm:h-[55dvh] "
        >

            {/* Top Tag */}
            <motion.div 
                className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-neutral-500 border-2"
                initial={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 1 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    Chat and Generate Images with Lucy
                </p>
                <img 
                    src="https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-shiny-yellow-star-png-image_16211396.png" 
                    alt="star" 
                    className="w-5 h-5 rotate-18 animate-bounce hover:rotate-100 duration-400"
                />
            </motion.div>

            {/* Heading */}
            <motion.h1 
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 2 }}
                animate={{ opacity: 1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center"
            >
                Ask <span className="text-blue-500" >questions</span> and generate 
                <span className="text-blue-500">images</span> instantly
            </motion.h1>

            {/* Subtext */}
            <motion.p 
                className="text-xs sm:text-sm md:text-base lg:text-lg text-center max-w-xl mx-auto mt-5 text-gray-500  
                    max-sm:px-2"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                animate={{ opacity: 1 }}
            >
                Explore general knowledge, solve doubts, or just satisfy your curiosity. 
                Chat with Lucy anytime and get clear, informative answers in real time.
            </motion.p>

            <div className="flex flex-row justify-around items-center gap-3 max-sm:flex-col max-sm:gap-0 " >
                {/* Button */}
                <motion.button 
                    onClick={startChat}
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    whileTap={{ scale: 0.95 }} 
                    transition={{ duration: 1 }}
                    className="sm:text-sm md:text-base lg:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 
                        flex items-center gap-2 rounded-full talk-btn
                        cursor-pointer hover:translate-y-[-1rem] duration-400 hover:shadow-xl max-sm:text-xs "
                >
                    Start Chat
                    <i className="fa-solid fa-comments arrow text-sm"></i>
                </motion.button>
                
                <motion.button 
                    onClick={generateImg}
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    whileTap={{ scale: 0.95 }} 
                    transition={{ duration: 1 }}
                    className="sm:text-sm md:text-base lg:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 
                        flex items-center gap-2 rounded-full talk-btn max-sm:text-xs 
                        cursor-pointer hover:translate-y-[-1rem] duration-400 hover:shadow-xl"
                >
                    Generate Images
                    <i className="fa-solid fa-up-long rotate-90 arrow"></i>
                </motion.button>
            </div>
            
            {/* Footer Text */}
            <p className="mt-2 text-neutral-600 text-xs sm:text-sm md:text-base">
                Powered by Lucy AI
            </p>
        </motion.div>
    );
}

export default Header;
