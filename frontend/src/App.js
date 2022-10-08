import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
// import Home from './pages/Home/Home';
import {useEffect} from 'react';
import { fetchAllQuestions } from './actions/question.js';
import { fetchAllusers } from './actions/users.js';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllusers())
  }, [dispatch])
  

  return (
       <Router>
          <Navbar/>
          <AllRoutes/>
       </Router>
  );
}

export default App;
