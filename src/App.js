import React, { useState, useEffect } from 'react';
import Header from './Header/Header.js';
import Hangman from './Hangman';
import Letters from './Letters/Letters.js';
import LetterInput from './Letters/LetterInput.js';
import GameResult from './GameResult';
import './App.scss';

const RANDOM_WORDS = [
  'artichoke',
  'broccoli',
  'celery',
  'fennel',
  'kale',
  'rosemary',
  'onion',
  'pepper',
  'carrot',
  'tomato',
  'ginger',
  'potato',
];

export default () => {
  const [gameState, setGameState] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setInorrectLetters] = useState([]);
  const [chosenWord, setChosenWord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!gameState && gameResult === null) {
      startGame();
      setLoading(false);
    }
  }, [gameState, gameResult]);

  const startGame = () => {
    setGameState(true);
    setGameResult(null);
    setCorrectLetters([]);
    setInorrectLetters([]);
    setChosenWord(RANDOM_WORDS[Math.round(Math.random() * RANDOM_WORDS.length)]);
  };

  const endGame = (result) => {
    setGameResult(result);
    setGameState(false);
  };

  const handleLetterClick = (letter) => {
    if (!gameState) {
      startGame();
    }

    if (chosenWord.toUpperCase().includes(String(letter).toUpperCase()) && !correctLetters.includes(letter)) {
      const newCorrectLetters = correctLetters.concat(letter);
      setCorrectLetters(newCorrectLetters);
      if (comapreArrayKeys(newCorrectLetters, getUniqueLetters(Array.from(chosenWord)))) {
        endGame('won');
      }
    } else {
      setInorrectLetters(incorrectLetters.concat(letter));
      if (incorrectLetters.length === 6) {
        endGame('lost');
      }
    }
  };

  const getUniqueLetters = (word) => {
    const letterArray = [];
    for (let i = 0, len = word.length; i < len; i++) {
      if (letterArray.includes(word[i])) {
        continue;
      }
      letterArray.push(word[i]);
    }
    return letterArray;
  };

  const comapreArrayKeys = (array1, array2) => {
    if (array1 === array2) return true;
    const wordArray = getUniqueLetters(array1);
    if (wordArray.length !== array2.length) return false;
    for (let i = 0, len = array2.length, count = 0; i < array2.length; i++) {
      if (wordArray.includes(array2[i])) {
        count++;
      }
      if (count === len) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className='app'>
      <Header />
      {!loading && (
        <React.Fragment>
          <Hangman incorrectLetters={incorrectLetters} />
          <LetterInput chosenWord={chosenWord} correctLetters={correctLetters} />
          <Letters onLetterClicked={handleLetterClick} incorrectLetters={incorrectLetters} />
        </React.Fragment>
      )}
      {(!gameState && gameResult) && <GameResult result={gameResult} onRestartClick={startGame} />}
    </div>
  );
};
