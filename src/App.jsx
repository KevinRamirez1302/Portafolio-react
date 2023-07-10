import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { Header } from "./Components/Header/Header/Header";
import { Form } from "./Components/Header/Form/Form";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/ContactMe" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
