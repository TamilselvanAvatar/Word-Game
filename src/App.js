import React, { useState } from 'react';
import './style.css';

import flamesService from './services/Flames/Flames.js';

import Header from './component/Header/Header.js';
import FlamesForm from './component/FlamesForm/FlamesForm.js';
import Result from './component/Result/flamesResult.js';

export default function App() {
  const [result, setResult] = useState('');
  const flamesHandler = (male, female) => {
    let result = flamesService(male, female);
    setResult({
      result: result,
      male: male.substr(0, 1).toUpperCase() + male.substr(1).toLowerCase(),
      female: female.substr(0, 1).toUpperCase() + female.substr(1).toLowerCase()
    });
  };

  return (
    <>
      <Header title="Word Game" />
      <div className="container ">
        <FlamesForm flamesService={flamesHandler} />
      </div>
      {result && <Result result={result} />}
    </>
  );
}
