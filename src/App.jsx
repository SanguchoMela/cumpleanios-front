import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Dashboard from './layout/Dashboard';
import Calendar from './pages/Calendar';
import Employees from './pages/Employees';
import Report from './pages/Report';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
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
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
