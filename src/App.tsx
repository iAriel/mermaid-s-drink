import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DrinkContextProvider } from './context/drinksContext';
import { Header } from './components/Header'
import { Details } from './components/Details';
import { HomeContent } from './components/HomeContent';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <DrinkContextProvider>
              <Header/>
              <div className="content">
              <Routes>
                <Route path="/" element={<HomeContent/>}/>
                <Route path="/details" element={<Details/>}/>
              </Routes>
          
              </div>
          </DrinkContextProvider>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
