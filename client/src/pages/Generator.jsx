
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { toast } from "react-toastify";
import { motion } from "motion/react";
import axios from "axios";
import { useState } from "react";
import "../App.css";


const Generator = () => {

    const [image , setImg] = useState("ChatGPT Image Sep 29, 2025, 12_46_06 AM.png");
    const [resultText , setResultText] = useState("");
    const [imgLoaded , setImgLoaded] = useState(false);
    const [loading , setLoading] = useState(false);
    const [input , setInput] = useState("");

    const onSubmitHandler = async (evt) => {
        evt.preventDefault();
        setLoading(true);
        setImgLoaded(false);
        setResultText(""); // reset previous text
        setImg("");        // reset previous image

        try {
            const response = await axios.post(`https://lucy-ai-y8d4.onrender.com/api/generate`, {
                prompt: input,
            });

            const data = response.data;

            // if Gemini returned an image
            if (data.resultImage) {
                toast( data.message , {
                    style: {
                        backgroundColor: "#3a3a3a75",
                        color: "#fff",
                    }
                })
                setImg(`${data.resultImage}`);
                setImgLoaded(true);
            }
        } catch (err) {
            toast(err.message, {
                style: {
                    backgroundColor: "#3a3a3a75",
                    color: "#fff",
                }
            });
            // alert("Something went wrong while generating.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar/>
            <motion.form 
                initial={{opacity: 0 , y:100}}
                transition={{duration: 1}}
                whileInView={{ opacity:1 , y:0 }}
                viewport={{ once: true }}
                className="mx-2 py-5 flex flex-col min-h-[90dvh] justify-center items-center " 
                onSubmit={onSubmitHandler}
            >
                <div className="flex flex-col items-center">
                    {/* Show generated image if available */}
                    {image && (
                        <div className="relative">
                            <img 
                                src={image}
                                alt="Generated" 
                                className="max-w-sm rounded max-sm:w-[20rem] "
                            />
                            <span 
                                className={`absolute bottom-0 left-0 h-1 bg-blue-500 
                                ${loading ? "w-full transition-all duration-10000" : "w-0"}`} 
                            />
                        </div>
                    )}

                    {/* Show generated text if available */}
                    {resultText && (
                        <div className="mt-6 max-w-xl text-center">
                            <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded">
                                {resultText}
                            </p>
                        </div>
                    )}

                    <p className={!loading ? "hidden" : ""}>Loading......</p>
                </div>

                {/* Input field */}
                { !imgLoaded && !resultText && 
                    <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full" >
                        <input 
                            onChange={ (evt) => setInput(evt.target.value)}
                            value={input}
                            type="text" placeholder="Describe what you want to generate!" 
                            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-col "
                        />

                        <button 
                            type="Submit" 
                            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full " 
                        >   
                            Generate
                        </button>
                    </div>
                }

                {/* Download / Generate Another */}
                {(imgLoaded || resultText) && 
                    <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full" >
                        <p 
                            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer "
                            onClick={() => {
                                setImgLoaded(false);
                                setResultText("");
                                setImg("");
                            }} 
                        >
                            Generate Another
                        </p>

                        {image && (
                            <a 
                                href={image} 
                                download="gemini-output.png" 
                                className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"  
                            >
                                Download
                            </a>
                        )}
                    </div>
                }
            </motion.form>
            <Footer/>
        </>
    );
};

export default Generator;
