import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { LoginPage } from './page/LoginPage';
import { RegisterPage } from './page/RegisterPage';
import { HomePage } from './page/HomePage'


function App() {
  return (
    <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/Home" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
