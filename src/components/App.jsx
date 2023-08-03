import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect, useState } from 'react';
import { getVehicles } from '../services/mockAPI';

function App() {
  const [favoritesItems, setFavoritesItems] = useState(() => {
      try {
      const items = JSON.parse(localStorage.getItem('favoritesItems'));
      if (items) {
        return items;
      } else {
        return [];
        }
    } catch (error) {
      console.log(error.message);
    }
    });
  const [vehiclesDatabase, setVehiclesDatabase] = useState([]);

  // -----------------NEW------------------------------------------/
  const [currentPage, setCurrentPage] = useState(1);
  const [allVehicles, setAllVehicles] = useState([]);
  const [allFavoriteVehicles, setAllFavoriteVehicles] = useState([]);
  useEffect(() => {
    vehiclesDatabase && setAllVehicles(vehiclesDatabase)
  }, [vehiclesDatabase])
  useEffect(() => {
    favoritesItems && setAllFavoriteVehicles(favoritesItems)
  }, [favoritesItems])

  const showNext = () => {
        return setCurrentPage(prevState => prevState + 1);
  };
  // -----------------NEW------------------------------------------/

  const addToFavorites = (id) => {
    const vehicle = vehiclesDatabase.filter(item => item.id === id);
    setFavoritesItems(prevState => prevState ? [...prevState, ...vehicle] : [...vehicle]);
  };

  const removeFromFavorites = (id) => {
    setFavoritesItems(prevState => prevState.filter(item => item.id !== id));
  };

  useEffect(() => {
    try {
      localStorage.setItem('favoritesItems', JSON.stringify(favoritesItems));
    } catch (error) {
      console.log(error.message);
    }
  }, [favoritesItems]);

  useEffect(() => {
    (async () => {
      const items = await getVehicles();
      if (items) {
        setVehiclesDatabase(items);
      }
    })();
  }, [])
  
    
    
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/catalog' element={
          <Catalog 
            vehiclesDatabase={vehiclesDatabase} 
            addToFavorites={addToFavorites} 
            removeFromFavorites={removeFromFavorites} 
            favoritesItems={favoritesItems}
            allVehicles={allVehicles}
            currentPage={currentPage}
            showNext={showNext}
            setAllVehicles={setAllVehicles}
          />}
        />
        <Route path='/favorites' element={
          <Favorites 
            vehiclesDatabase={vehiclesDatabase} 
            addToFavorites={addToFavorites} 
            removeFromFavorites={removeFromFavorites} 
            favoritesItems={favoritesItems}
            allFavoriteVehicles={allFavoriteVehicles}
            currentPage={currentPage}
            showNext={showNext}
            setAllFavoriteVehicles={setAllFavoriteVehicles}
          />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
