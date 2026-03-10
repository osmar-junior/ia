import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { TrilhaJuridica } from './pages/TrilhaJuridica';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trilha-juridica" element={<TrilhaJuridica />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
