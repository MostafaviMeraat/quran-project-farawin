import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pages from './components/Pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='sure/:id' element={<Calc />} /> */}
      <Route path='sure/:id' element={<Pages />} />
    </Routes>
  </Router>
);