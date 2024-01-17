import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import("./pages/HomePage"))
const Catalog = lazy(() => import("./pages/Catalog"))
const Favorites = lazy(() => import("./pages/Favorites"))

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
