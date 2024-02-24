import { useEffect, useRef, useState } from 'react';
import useCustomAlert from './useCustomAlert';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEqualNumber = (num1, num2) => num1 === num2;
const isSmaller = (num1, num2) => num1 < num2;
const isBigger = (num1, num2) => num1 > num2;

//FALTA MOSTRAR UNA MODAL DE WARNING EN CASO DE QUE ENGAÑEMOS CON EL BOTON
const useGameLogic = (actualNumber) => {
  const { showAlert } = useCustomAlert();
  const minNumberRef = useRef(0);
  const maxNumberRef = useRef(100);
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomNumber(minNumberRef.current, maxNumberRef.current)
  );
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const generateGuessNumber = () => {
    setGuessedNumber(generateRandomNumber(minNumberRef.current, maxNumberRef.current));
  };

  const handleIsLowerNumber = () => {
    if (isBigger(actualNumber, guessedNumber)) {
      showAlert('Warning', 'Don´t lie');
      return;
    }
    handleMistake();
    maxNumberRef.current = guessedNumber - 1;
    generateGuessNumber();
  };

  const handleIsBiggerNumber = () => {
    if (isSmaller(actualNumber, guessedNumber)) {
      showAlert('Warning', 'Don´t lie');
      return;
    }
    handleMistake();
    minNumberRef.current = guessedNumber + 1;
    generateGuessNumber();
  };

  const handleMistake = () => {
    const newMistake = { id: guesses.length + 1, guessedNumber };
    setGuesses((prevState) => [...prevState, newMistake]);
  };

  useEffect(() => {
    if (isEqualNumber(guessedNumber, actualNumber)) {
      setIsGameOver(true);
    }
  }, [guessedNumber]);

  return { isGameOver, guesses, guessedNumber, handleIsLowerNumber, handleIsBiggerNumber };
};

export default useGameLogic;
