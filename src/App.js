import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <h1>Header</h1>
      <Router>
        <Routes>
          <Route path='/' element={<h1>Pocetna</h1>} />
          <Route path='/about-us' element={<h2>About us</h2>} />
        </Routes>
      </Router>
      <h1>Footer</h1>
    </>
  );
}

export default App;
