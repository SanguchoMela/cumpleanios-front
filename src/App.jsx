import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Dashboard from './layout/Dashboard';
import Calendar from './pages/Calendar';
import Employees from './pages/Employees';
import Report from './pages/Report';
import Auth from './layout/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}>
          <Route index element={<Login />} />
        </Route>
        <Route
          path="/dashboard/*"
          element={
            <Routes>
              <Route element={<Dashboard />}>
                <Route index element={<Calendar />} />
                <Route path='empleados' element={<Employees />} />
                <Route path='reporte' element={<Report />} />
              </Route>
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
