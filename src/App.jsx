import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HousesPage from './pages/HousesPage/HousesPage';
import ChronologyPage from './pages/ChronologyPage/ChronologyPage';
import Footer from './components/Footer/Footer';


function App() {
  return (

    <div>

      <Router>
        <Footer/>        
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="characters" element={<CharactersPage/>}/>
          <Route path="houses" element={<HousesPage/>}/>
          <Route path="chronology" element={<ChronologyPage/>}/>
        </Routes>
        
      </Router>



    </div>

  );
}

export default App;
