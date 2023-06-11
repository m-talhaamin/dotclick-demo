
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import './global.scss'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
     </BrowserRouter>  
    </>
  )
}

export default App
