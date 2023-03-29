import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Header from './Components/Header';
import Erro from './Pages/Erro';
import Favoritos from './Pages/Favoritos';
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Filme/:id" element={<Filme/>}/>               
                <Route path='/Favoritos' element={<Favoritos/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;