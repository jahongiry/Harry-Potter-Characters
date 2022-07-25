import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
