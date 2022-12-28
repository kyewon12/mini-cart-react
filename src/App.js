// import './App.css';
import React from 'react';
import CartMain from './pages/Cart/CartMain';
import Login from './pages/Login/Login';
// import GoogleButton from './api/googlButton';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cart" element={<CartMain />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
