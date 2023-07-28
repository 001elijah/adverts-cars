import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
