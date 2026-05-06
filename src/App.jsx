import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import './App.css';

export default function App() {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<AdminInventory />} />
            <Route path="/create" element={<AdminInventoryCreate />} />
            <Route path="/edit/:id" element={<AdminInventoryEdit />} />
            <Route path="/details/:id" element={<AdminInventoryDetails />} />
          </Routes>
        </div>
      </Router>
  );
}