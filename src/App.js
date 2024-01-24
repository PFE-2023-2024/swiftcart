import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeBoutique from './Composants/Boutiques/HomeBoutique';
import Navbar1 from './Composants/Navbar/Navbar1';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar1></Navbar1>}/>
    <Route path="/HomeBoutique" element={<HomeBoutique></HomeBoutique>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
