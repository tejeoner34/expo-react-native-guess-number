import { useEffect, useState } from 'react';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let minNumber = 0;
let maxNumber = 100;

//FALTA MOSTRAR UNA MODAL DE WARNING EN CASO DE QUE ENGAÑEMOS CON EL BOTON
const useGameLogic = (actualNumber) => {
  const [guessedNumber, setGuessedNumber] = useState(generateRandomNumber(minNumber, maxNumber));

  const checkNumber = () => {
    const isCorrect = guessedNumber === actualNumber;
    console.log(isCorrect);
  };

  const generateGuessNumber = () => {
    setGuessedNumber(generateRandomNumber(minNumber, maxNumber));
  };

  const handleIsLowerNumber = () => {
    console.log(maxNumber);
    maxNumber = guessedNumber;
    generateGuessNumber();
  };

  const handleIsBiggerNumber = () => {
    console.log(minNumber);
    minNumber = guessedNumber;
    generateGuessNumber();
  };

  useEffect(() => {
    checkNumber();
  }, [guessedNumber]);

  return { guessedNumber, handleIsLowerNumber, handleIsBiggerNumber };
};

export default useGameLogic;
