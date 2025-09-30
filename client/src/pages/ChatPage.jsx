import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "motion/react";
import "../App.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const ChatAI = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (evt) => {
        evt.preventDefault();
        if (!input.trim()) return;

        const userMessage = { type: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        setInput("");

        try {
            const response = await axios.post(`http://localhost:8080/api/chat`, {
                prompt: input,
            });

            const aiText = response.data.text || "No response";
            const aiMessage = { type: "ai", text: aiText };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            console.error(err);
            setMessages((prev) => [...prev, { type: "ai", text: "Error: Could not fetch response." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-start min-h-[90dvh] mt-[4rem] px-4 bg-white"
            >
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Talk with Lucy</h1>

                <div className="w-full max-w-2xl bg-gray-100 rounded-2xl p-6 flex flex-col gap-4 h-[70vh] overflow-y-auto shadow-xl border border-gray-200">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`max-w-[75%] px-4 py-2 rounded-2xl break-words 
                            ${msg.type === "user"
                                ? "bg-blue-600 text-white self-end shadow-md"
                                : "bg-white text-gray-800 self-start shadow-sm"
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                    {loading && (
                        <p className="self-start text-gray-500 italic animate-pulse">
                            Lucy is typing...
                        </p>
                    )}
                    <div ref={bottomRef} />
                </div>

                <form
                    className="flex w-full max-w-2xl mt-4"
                    onSubmit={sendMessage}
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your question here..."
                        className="flex-1 p-3 rounded-l-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 rounded-r-2xl hover:bg-blue-700 transition shadow-md"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
            <Footer />
        </>
    );
};

export default ChatAI;
