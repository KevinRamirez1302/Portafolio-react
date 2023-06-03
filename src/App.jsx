import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/navbar'
import { Header } from './Components/Header/Header/Header'

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Header/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
