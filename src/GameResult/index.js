import React from 'react';
import './style.scss';

export default (props) => {
  const { result, onRestartClick } = props;

  return (
    <div className='dialog'>
      <p>You {result}!</p>
      <button onClick={onRestartClick}>Restart</button>
    </div>
  );
};
