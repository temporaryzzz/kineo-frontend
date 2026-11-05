// import { useState } from 'react';
import { Route, Routes } from 'react-router';

import { LoginPage } from './ui/pages/auth/components/loginPage';
import { RegisterPage } from './ui/pages/auth/components/registerPage';
import { ProtectedRoute } from './ui/shared/routing/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />

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

