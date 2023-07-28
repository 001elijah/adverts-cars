import React from 'react';
import { Link } from 'react-router-dom';
import s from './HomePageSection.module.scss';

const HomePageSection = () => {
  return (
      <section className='container'>
          <h1 className={s.title}>Adverts Cars car rental service</h1>
          <h2 className={s.caption}>Rent a car in a matter of seconds, without SMS and registration.</h2>
          <p className={s.text}>Our car rental service provides a broad selection of cars.
              Daily or weekend, for a couple or for a whole family.
              The service meets any of your needs!
          </p>
          <Link
            className={s.button}
            to={'catalog'}
            key={'catalog'}
          >
            Pick your car
          </Link>
          
      </section>
  )
}

export default HomePageSection