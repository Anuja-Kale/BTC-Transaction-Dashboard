// src/App.tsx
import React from 'react';
import './App.css';
import TransactionForm from './TransactionForm';
import TransactionDetails from './TransactionDetails'; // Import TransactionDetails
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>BTC Transaction Dashboard</h1>
                </header>
                <Routes>
                    <Route path="/" element={<TransactionForm />} />
                    <Route path="/transaction/:id" element={<TransactionDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
