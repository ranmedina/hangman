import React from 'react';
import '../Letters/Letters.scss';

export default (props) => {
  const { onLetterClicked, incorrectLetters } = props;
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const handleClick = (letter) => {
    onLetterClicked(letter);
  };

  return (
    <div className='letters'>
      {Array.from(letters).map((letter) => {
        return (
          <button key={letter} onClick={() => handleClick(letter)} disabled={incorrectLetters.includes(letter)}>
            {letter}
          </button>
        );
      })}
    </div>
  );
};
