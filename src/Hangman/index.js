import React from 'react';
import '../Hangman/style.scss';

export default (props) => {
  const incorrectLetters = props.incorrectLetters.length;

  const classNames = {
    body: `
      ${incorrectLetters >= 2 ? 'body' : ''}
      ${incorrectLetters >= 3 ? 'one-handed' : ''}
      ${incorrectLetters >= 4 ? 'two-handed' : ''}
    `,
    legs: `
      legs
      ${incorrectLetters >= 5 ? 'one-legged' : ''}
      ${incorrectLetters >= 6 ? 'two-legged' : ''}
    `,
  };

  return (
    <div className='hangman'>
      <div className='stand'>
        <div className='stand1' />
        <div className='stand2' />
        <div className='stand3' />
      </div>
      <div className='person'>
        {incorrectLetters >= 1 && <div className='head' />}
        <div className={classNames.body} />
        <div className={classNames.legs} />
      </div>
    </div>
  );
};
