
import "../App.css";
import { motion } from "motion/react";

const Description = () => {
    return (
        <>
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black text-white p-6 md:px-28 mt-24"
                >
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                    LUCY-AI
                </h1>

                <p className="text-gray-500 mb-12 text-center text-sm sm:text-base md:text-lg lg:text-xl">
                    Ask questions and get instant answers and can generate images from our AI assistant
                </p>

                {/* Scroll Section */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                    
                    {/* Sticky Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                        >
                        <img
                            src="ChatGPT Image Sep 28, 2025, 09_04_58 PM.png" // replace with your chat illustration
                            alt="AI Chat"
                            className="w-72 sm:w-80 md:w-96 rounded-lg sticky top-24 self-start lucy-logo-2nd"
                            />
                    </motion.div>

                    {/* Scrollable Text */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                        >
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                                Introducing the Lucy Chat Assistant
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                Ask anything you want — from general knowledge to personal guidance — 
                                and get instant, accurate answers. Our Lucy AI assistant understands 
                                your queries and provides text-based responses in real time.
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                Simply type your question into the chat box, hit send, and watch as 
                                our AI assistant delivers clear, informative, and helpful responses. 
                                Whether you’re learning, exploring, or just curious, your AI companion 
                                is here to help.
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                Chat with Lucy-AI anytime, anywhere — the smarter way to get answers, 
                                understand concepts, and explore knowledge effortlessly.
                            </p>
                        </div>
                    </motion.div>
                </div>

        <br />
        <br />
        <br />
        {/* ______ */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

                    {/* Scrollable Text */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                        >
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                                Introducing the AI-Powered Text to Image Generator
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                Easily bring your ideas to life with our free AI image generator. 
                                Whether you need stunning visuals or unique imagery, our tool transforms 
                                your text into eye-catching image with just a few clicks. Imagine it, 
                                describe it, and watch it come to life instantly.
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                Simply type in a text prompt, and our cutting-edge AI will generate 
                                high visuals to characters designs and portraits, even concepts that 
                                don’t yet exist can be visualized effortlessly. 
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                Chat with Lucy-AI anytime, anywhere — the smarter way to get answers, 
                                understand concepts, and explore knowledge effortlessly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Sticky Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                        >
                        <img
                            src="ChatGPT Image Sep 29, 2025, 12_46_06 AM.png" // replace with your chat illustration
                            alt="AI Generator"
                            className="w-72 sm:w-80 md:w-96 rounded-lg sticky top-24 self-start lucy-logo-3rd"
                            />
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default Description;
