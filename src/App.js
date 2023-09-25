import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-us' element={<h2>About us</h2>} />
          <Route path='/faq' element={<h2>FAQ</h2>} />
        </Routes>
      </Router>
      <h1>Footer</h1>
    </>
  );
}

export default App;
