
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Booking' element={<Booking/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
