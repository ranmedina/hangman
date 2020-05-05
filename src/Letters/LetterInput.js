import React, { useEffect, useState } from 'react';
import '../Letters/LetterInput.scss';

export default (props) => {
  const { chosenWord, correctLetters } = props;
  const [value, setValue] = useState(props.chosenWord);

  useEffect(() => {
    setValue(props.chosenWord);
  }, [props.chosenWord]);

  return (
    <div className='word'>
      {[...Array(value.length)].map((_, idx) => {
        return <input key={idx} value={correctLetters.includes(value[idx]) ? chosenWord[idx] : ''} disabled></input>;
      })}
    </div>
  );
};
