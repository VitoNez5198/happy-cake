import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Navbar from "./components/Navbar";
import Contact from "./views/Contact";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/happy-cake">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>          
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
