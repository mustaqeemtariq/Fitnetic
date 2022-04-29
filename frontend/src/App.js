import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './screens/Login/Login'
import Settings from './screens/Settings/Settings'
import Signup from './screens/Signup/Signup'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './screens/Homepage/Homepage'

const App = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#C8C8C8", minHeight: "90vh", margin: "0" }}>
        <Router>
          <Routes>
            <Route path="/api/homepage" element={<Homepage />} exact />
            <Route path="/api/users/signup" element={<Signup />} exact />
            <Route path="/api/users/login" element={<Login />} exact />
            <Route path="/api/users/profile/update" element={<Settings />} exact />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App