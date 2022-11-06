import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pages from './components/Pages';
import Setting from './components/Setting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='page/:pageNumber' element={<Pages />} />
      <Route path='setting' element={<Setting />} />
    </Routes>
  </Router>
);