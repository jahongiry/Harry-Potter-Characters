import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Navigation from './components/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchData} from './redux/homeStore'
import classes from './App.module.css';
import Footer from './components/Footer';

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
