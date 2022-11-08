import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pages from './components/Pages';
import Setting from './components/Setting';
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './redux/reducers/index'

const store = createStore(allReducers)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='page/:pageNumber' element={<Pages />} />
        <Route path='setting' element={<Setting />} />
      </Routes>
    </Router>
  </Provider>
);