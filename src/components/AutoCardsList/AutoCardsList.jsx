import React from 'react';
import AutoCard from '../AutoCard/AutoCard';
import s from './AutoCardsList.module.scss';

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
    }
]

const AutoCardsList = () => {
  return (
      <ul className={s.wrapper}>
          {catalogSample && catalogSample.map(vehicle => <AutoCard key={vehicle.id} vehicleInfo={vehicle} />)}
      </ul>
  )
}

export default AutoCardsList