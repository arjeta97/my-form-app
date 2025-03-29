import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import FormOne from "./components/formone";
import FormTwo from "./components/formtwo";
import Footer from "./components/footer"
import DisplayInput from "./components/inputs";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<FormOne/>}></Route>
        <Route path="form-two" element={<FormTwo/>}></Route>
        <Route path="inputs" element={<DisplayInput/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
