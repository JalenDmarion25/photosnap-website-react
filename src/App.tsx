import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { Features } from "./pages/Features"
import { Pricing } from "./pages/Pricing"
import Stories from "./pages/Stories"




ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename="/photosnap-website-react/">
    <Routes>
    
        <Route path="/"  element={<Home/>}/>
        <Route path="/features"  element={<Features/>}/>
        <Route path="/pricing"  element={<Pricing/>}/>
        <Route path="/stories"  element={<Stories/>}/>
    </Routes>     
    </BrowserRouter>
)
