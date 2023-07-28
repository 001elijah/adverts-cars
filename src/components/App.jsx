import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import SharedLayout from './SharedLayout/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
