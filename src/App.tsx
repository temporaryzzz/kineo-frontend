// import { useState } from 'react';
import { Route, Routes } from 'react-router';

import { LoginPage } from './ui/pages/login/components/loginPage';
import { ProtectedRoute } from './ui/shared/routing/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="" />
        <Route path="/calendar" />
        <Route path="/catalog" />
        <Route path="/settings" />
      </Route>
    </Routes>
  );
}

export default App;

