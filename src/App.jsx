import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Courses from './components/courses/Courses'
import CourseDetails from './components/courses/CourseDetails'
import Dashboard from './components/dashboard/Dashboard'
import NotFound from './components/pages/NotFound'
import './App.css'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <>
      <Navbar user={user} logout={logout} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login login={login} user={user} />} />
          <Route path="/register" element={<Register login={login} user={user} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App