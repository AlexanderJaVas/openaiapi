import { Route, Routes } from 'react-router-dom'
import ChatPage from './ChatPage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import Home from './Home'
import './App.css'
import NotFound from './NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
