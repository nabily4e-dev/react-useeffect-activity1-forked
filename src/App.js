/** @format */

import React, { useEffect, useState } from 'react';
import DogList from './DogList';
import Form from './Form';
import './styles.css';

export default function App() {
  const [numberOfDogs, setNumberOfDogs] = useState(3);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
      .then((response) => response.json())
      .then((data) => setDogs(data.message));
  }, [numberOfDogs]);

  return (
    <div className='card'>
      <Form setNumberOfDogs={setNumberOfDogs} />
      <DogList dogsList={dogs} />
    </div>
  );
}
