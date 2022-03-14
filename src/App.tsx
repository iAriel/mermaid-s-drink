import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DrinkContextProvider } from './context/drinksContext';

import { Header } from './components/Header'
import { Cards } from './components/Card';
import { Details } from './components/Details';
import { HomeContent } from './components/HomeContent';
function App() {
  return (
    <div className="App">
        <DrinkContextProvider>
            <Header/>
            <div className="content">
              <HomeContent />
              {/* <Cards/> */}
              {/* <Details/> */}
            </div>
        </DrinkContextProvider>
      </div>
  );
}

export default App;
