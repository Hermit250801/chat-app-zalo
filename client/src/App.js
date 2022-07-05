import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from '~/pages/Chat';
import Register from '~/pages/Register';
import Login from './pages/Login';

function App() {
    document.title = '';
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Chat />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
