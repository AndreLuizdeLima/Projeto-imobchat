import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Planos from "./pages/Planos.jsx";
import Contato from "./pages/Contato.jsx";
import PoliticaEPrivacidade from "./pages/PoliticaEPrivacidade.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/planos' element={<Planos />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/politica-de-privacidade' element={<PoliticaEPrivacidade />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
