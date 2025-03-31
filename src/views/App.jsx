import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nav from './Nav/nav'
import ListToDo from './ToDoApp/ListToDo'
import ListUser from './Users/ListUser'
import Home from './example/Home'
import UserDetails from './Users/UserDetails'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <Nav />
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/todo" element={<ListToDo />} />
            <Route path="/users" element={<ListUser />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </>
    </Router>
  )
}

export default App
