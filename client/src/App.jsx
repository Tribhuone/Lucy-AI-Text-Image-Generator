
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home.jsx";
import './App.css';
import ChatPage from './pages/ChatPage.jsx';
import Generator from './pages/Generator';

const App = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
        <Route path="/generate" element={<Generator/>}/>
      </Routes>

      <ToastContainer 
            theme="colored" 
            position="top-center"
            autoClose={1100}
        />
    </Router>
  )
}

export default App
