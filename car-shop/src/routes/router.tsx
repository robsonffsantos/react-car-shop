import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "../pages/home/index"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router