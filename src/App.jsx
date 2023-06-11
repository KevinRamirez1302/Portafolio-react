import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/navbar'
import { Header } from './Components/Header/Header/Header'
import Projects from './Components/Projects/Projects'

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Header/>}/>
        <Route path='Projects' element={<Projects />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
