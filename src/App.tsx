import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './home/HomeScreen'
import LoginScreen from './login/LoginScreen'
import PrivateRoute from './PrivateRoute'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route
                    path="/home"
                    element={<PrivateRoute element={<HomeScreen />} />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
