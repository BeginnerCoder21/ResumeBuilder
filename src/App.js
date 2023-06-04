import './App.css';
import React from 'react';
import Header from './components/Header/header';
import Body from './components/Body/body';
import { Route, Routes } from 'react-router-dom';
import Editor from './components/Editor/editor';
import About from './components/About/about';
import Faqs from './components/FAQ/faqs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Header/>}/>
        <Route path="/editor" element={<Body/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<Faqs/>}/>
      </Routes>
    </div>
  );
}

export default App;
