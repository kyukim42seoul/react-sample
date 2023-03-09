import { useState } from 'react';
import './App.css';
import MiniPage from './pages/MiniPage';
import Box from './components/Box';

function App() {
    return (
        <div className='App'>
            <h1>Hey...!</h1>
            <MiniPage />
            <Box />
        </div>
    );
}

export default App;
