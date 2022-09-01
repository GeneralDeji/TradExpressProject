// import './App.css';
import Navbar from './First Component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './First Component/Home';
import Getstarted from './Second Component/Getstarted';
import Individual from './Second Component/Individual';
import Business from './Second Component/Business';
import InstantBuySell from './Third Component/InstantBuySell';
import Buy from './Third Component/Buy';
import Sell from './Third Component/Sell';
import Login from './Fourth Component/Login';
import Almost from './Second Component/Almost';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index path='/' element={<Home/>} />

            //This one is for my Getstarted page
            <Route path='Getstarted' element={<Getstarted/>} />
            <Route path='Individual' element={<Individual/>} />
            <Route path='Business' element={<Business/>} />

            //This one is for my Instant Buy/Sell Page
            <Route path='InstantBuySell' element={<InstantBuySell/>} />
            <Route path='Buy' element={<Buy/>} />
            <Route path='Sell' element={<Sell/>} />
            <Route path='Almost' element={<Almost/>} />

            //My Login Page
            <Route path='Login' element={<Login/>} />
          </Routes>
        
        </BrowserRouter>

      
      
    </div>
  );
}

export default App;
