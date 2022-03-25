import React from 'react';
import './App.css';
import { Layout } from './components/Layout.js';
import  Events  from './components/Events.js';
import { Routes, Route } from 'react-router-dom';
import AnEvent from './components/AnEvent.js';



export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout title="Viðburðir á næstunni"><Events /></Layout>}>
        <Route path=":eventId" element={<AnEvent />} />
        
      </Route>
      
    </Routes>
  );
}

