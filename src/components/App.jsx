import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect, useState } from 'react';

const catalogSample = [
  {
        "id": 9582,
        "year": 2008,
        "make": "Buick",
        "model": "Enclave",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
        "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
        "fuelConsumption": "10.5",
        "engineSize": "3.6L V6",
        "accessories": [
            "Leather seats",
            "Panoramic sunroof",
            "Premium audio system"
        ],
        "functionalities": [
            "Power liftgate",
            "Remote start",
            "Blind-spot monitoring"
        ],
        "rentalPrice": "$40",
        "rentalCompany": "Luxury Car Rentals",
        "address": "123 Example Street, Kyiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 5858
    },
    {
        "id": 9584,
        "year": 2019,
        "make": "Volvo",
        "model": "XC90",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",
        "description": "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
        "fuelConsumption": "8.3",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Nappa leather seats",
            "Bowers & Wilkins premium sound system",
            "Head-up display"
        ],
        "functionalities": [
            "IntelliSafe advanced safety features",
            "Pilot Assist semi-autonomous driving",
            "Four-zone automatic climate control"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Premium Auto Rentals",
        "address": "456 Example Avenue, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 5352
    },
    {
        "id": 9586,
        "year": 2020,
        "make": "Volvo",
        "model": "XC60",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",
        "description": "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
        "fuelConsumption": "7.9",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Premium leather seats",
            "Harman Kardon audio system",
            "Hands-free power tailgate"
        ],
        "functionalities": [
            "City Safety collision avoidance technology",
            "Pilot Assist with adaptive cruise control",
            "9-inch Sensus touchscreen infotainment system"
        ],
        "rentalPrice": "$45",
        "rentalCompany": "Luxury Car Rentals",
        "address": "789 Example Boulevard, Odessa, Ukraine",
        "rentalConditions": "Minimum age: 23\nValid driver's license\nCredit card required",
        "mileage": 5966
    },
    {
        "id": 9587,
        "year": 2006,
        "make": "HUMMER",
        "model": "H2",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp",
        "description": "The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",
        "fuelConsumption": "19.8",
        "engineSize": "6.0L V8",
        "accessories": [
            "Heated leather seats",
            "Bose premium sound system",
            "Off-road package"
        ],
        "functionalities": [
            "Electronic locking front and rear differentials",
            "Stabilitrak stability control",
            "Tire pressure monitoring system"
        ],
        "rentalPrice": "$55",
        "rentalCompany": "Adventure Car Rentals",
        "address": "321 Example Road, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 4771
    },
    {
        "id": 9590,
        "year": 2016,
        "make": "Subaru",
        "model": "Outback",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/subaru_outback.jpg",
        "description": "The Subaru Outback is a versatile and reliable SUV that combines off-road capability with a comfortable and spacious interior.",
        "fuelConsumption": "8.7",
        "engineSize": "2.5L 4-cylinder",
        "accessories": [
            "Leather upholstery",
            "Power moonroof",
            "Harman Kardon premium audio system"
        ],
        "functionalities": [
            "Symmetrical All-Wheel Drive",
            "X-Mode off-road assist",
            "Subaru EyeSight driver-assist system"
        ],
        "rentalPrice": "$35",
        "rentalCompany": "Adventure Car Rentals",
        "address": "987 Example Street, Kyiv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nCredit card required",
        "mileage": 4061
    },
    {
        "id": 9591,
        "year": 2010,
        "make": "Mitsubishi",
        "model": "Outlander",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/mitsubishi_outlander.jpg",
        "description": "The Mitsubishi Outlander is a practical and fuel-efficient SUV with a stylish design and a range of modern features.",
        "fuelConsumption": "7.9",
        "engineSize": "2.4L 4-cylinder",
        "accessories": [
            "Heated front seats",
            "Rockford Fosgate premium audio system",
            "Power liftgate"
        ],
        "functionalities": [
            "Super All-Wheel Control",
            "Multi-View camera system",
            "Bluetooth hands-free system"
        ],
        "rentalPrice": "$30",
        "rentalCompany": "City Car Rentals",
        "address": "654 Example Avenue, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 5374
    },
    {
        "id": 9593,
        "year": 2014,
        "make": "Nissan",
        "model": "Pathfinder",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/nissan_pathfinder.jpg",
        "description": "The Nissan Pathfinder is a versatile and family-friendly SUV that offers a comfortable ride and generous cargo space.",
        "fuelConsumption": "9.5",
        "engineSize": "3.5L V6",
        "accessories": [
            "Tri-Zone Automatic Climate Control",
            "Bose premium audio system",
            "Rear-seat entertainment system"
        ],
        "functionalities": [
            "Intelligent 4x4 system",
            "Advanced Drive-Assist Display",
            "Nissan Intelligent Key with push-button ignition"
        ],
        "rentalPrice": "$40",
        "rentalCompany": "Luxury Car Rentals",
        "address": "321 Example Road, Odessa, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 6282
    },
    {
        "id": 9596,
        "year": 2009,
        "make": "Lincoln",
        "model": "Navigator L",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/lincoln_navigator_l.webp",
        "description": "The Lincoln Navigator L is a luxurious and spacious SUV with a refined interior and advanced technology features.",
        "fuelConsumption": "18.2",
        "engineSize": "5.4L V8",
        "accessories": [
            "Premium leather seats",
            "THX II Certified audio system",
            "Power-deployable running boards"
        ],
        "functionalities": [
            "AdvanceTrac with Roll Stability Control",
            "Voice-Activated Navigation System",
            "Power liftgate"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Elite Car Rentals",
        "address": "123 Example Boulevard, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nInsurance coverage required",
        "mileage": 6173
    },
    {
        "id": 9597,
        "year": 2000,
        "make": "GMC",
        "model": "Yukon Denali",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/gmc_yukon_denali.jpg",
        "description": "The GMC Yukon Denali is a full-size luxury SUV that offers a powerful engine, a comfortable and spacious interior, and a host of advanced features.",
        "fuelConsumption": "14.5",
        "engineSize": "6.0L V8",
        "accessories": [
            "Heated and ventilated front seats",
            "BOSE premium sound system",
            "Power-folding third-row seats"
        ],
        "functionalities": [
            "All-Wheel Drive",
            "Adaptive suspension",
            "Advanced safety features"
        ],
        "rentalPrice": "$45",
        "rentalCompany": "Premium Car Rentals",
        "address": "789 Example Square, Dnipro, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 4989
    },
    {
        "id": 9598,
        "year": 2007,
        "make": "Hyundai",
        "model": "Tucson",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hyundai_tucson.jpg",
        "description": "The Hyundai Tucson is a reliable and fuel-efficient SUV that combines practicality with a stylish design and a comfortable ride.",
        "fuelConsumption": "8.2",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Apple CarPlay and Android Auto integration",
            "Blind Spot Detection",
            "Hands-free smart liftgate"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Hillstart Assist Control",
            "LED headlights"
        ],
        "rentalPrice": "$25",
        "rentalCompany": "Economy Car Rentals",
        "address": "456 Example Lane, Zaporizhzhia, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nCredit card required",
        "mileage": 4591
    },
    {
        "id": 9583,
        "year": 2006,
        "make": "MINI",
        "model": "Convertible",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/mini_convertible.jpg",
        "description": "The MINI Convertible is a compact and fun-to-drive convertible that offers a unique and iconic design, agile handling, and an open-air driving experience.",
        "fuelConsumption": "6.9",
        "engineSize": "1.6L 4-cylinder",
        "accessories": [
            "Convertible soft top",
            "Sport seats",
            "MINI Connected infotainment system"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Dynamic Stability Control",
            "Rain-sensing wipers"
        ],
        "rentalPrice": "$30",
        "rentalCompany": "Fun Car Rentals",
        "address": "234 Example Place, Vinnytsia, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 6275
    },
    {
        "id": 9606,
        "year": 2007,
        "make": "Bentley",
        "model": "Azure",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/bentley_azure.jpg",
        "description": "The Bentley Azure is a luxurious and prestigious convertible that combines exceptional craftsmanship, powerful performance, and sophisticated elegance.",
        "fuelConsumption": "22.5",
        "engineSize": "6.8L V8",
        "accessories": [
            "Mulliner Driving Specification",
            "Naim for Bentley premium audio system",
            "Heated steering wheel"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Air suspension",
            "Automatic convertible roof"
        ],
        "rentalPrice": "$150",
        "rentalCompany": "Luxury Car Rentals",
        "address": "567 Example Street, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 30\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 4317
    },
    {
        "id": 9612,
        "year": 2004,
        "make": "Mercedes-Benz",
        "model": "SL-Class",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/mercedes_sl_class.jpg",
        "description": "The Mercedes-Benz SL-Class is a legendary luxury convertible that offers a perfect blend of thrilling performance, advanced technology, and opulent comfort.",
        "fuelConsumption": "11.8",
        "engineSize": "5.0L V8",
        "accessories": [
            "Airscarf neck-level heating",
            "Harman Kardon premium audio system",
            "Active Body Control suspension"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Retractable hardtop roof",
            "Multi-contour seats"
        ],
        "rentalPrice": "$75",
        "rentalCompany": "Exquisite Car Rentals",
        "address": "789 Example Boulevard, Kyiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and proof of insurance required",
        "mileage": 5722
    }
]

function App() {
  const [favoritesItems, setFavoritesItems] = useState(() => {
      try {
      const items = JSON.parse(localStorage.getItem('favoritesItems'));
      if (items) {
        return items;
      }
    } catch (error) {
      console.log(error.message);
    }
    });
  const [vehiclesDatabase, setVehiclesDatabase] = useState([]);

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
    const items = catalogSample;
    if (items) {
      setVehiclesDatabase(items);
    }
  }, [])
  
    
    
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/catalog' element={<Catalog vehiclesDatabase={vehiclesDatabase} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favoritesItems={favoritesItems} />} />
        <Route path='/favorites' element={<Favorites vehiclesDatabase={vehiclesDatabase} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favoritesItems={favoritesItems} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
