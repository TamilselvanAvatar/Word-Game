import React, { useState, useEffect } from 'react';
import './flamesResult.css';

const flamesResult = (props) => {
  // const url;
  const [res] = useState({
    F: ['Friend', '👩🏼‍🤝‍🧑🏼'],
    L: ['Love', '💘'],
    A: ['Affection', '🥰'],
    M: ['Marriage', '💑'],
    E: ['Enemy', '👿'],
    S: ['Sister', '👩‍👦'],
  });
  const { result, male, female } = props.result;

  return (
    <div className="result">
      <div className="text-sm-start">
        <span style={{ color: 'red' }} className="text-sm-start">
          {male} and {female} may end up with{' '}
        </span>
        <span style={{ color: 'green', fontStyle: 'italic' }}>
          {' '}
          {result && res[result][0]}{' '}
        </span>
      </div>
      <div className="text-sm-start">
        {'👨‍💼 ' + ' 🔄 ' + ' 👩‍💼' + ' ⇒ ' + res[result][1]}
        {/* window key + . = emoji app */}
      </div>
    </div>
  );
};

export default flamesResult;
