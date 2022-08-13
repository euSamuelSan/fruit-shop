import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContext'
import HomeScreen from './home/HomeScreen'

function App() {
    return (
        <>
            <UserContextProvider>
                <HomeScreen />
            </UserContextProvider>
        </>
    )
}

export default App
