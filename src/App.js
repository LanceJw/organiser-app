import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import DevelopersInfo from './components/Developers/DevelopersInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/developers' element={<DevelopersInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
