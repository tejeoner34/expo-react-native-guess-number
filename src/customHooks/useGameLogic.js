import { useEffect, useRef, useState } from 'react';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//FALTA MOSTRAR UNA MODAL DE WARNING EN CASO DE QUE ENGAÑEMOS CON EL BOTON
const useGameLogic = (actualNumber) => {
  const minNumberRef = useRef(0);
  const maxNumberRef = useRef(100);
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomNumber(minNumberRef.current, maxNumberRef.current)
  );

  const checkNumber = () => {
    const isCorrect = guessedNumber === actualNumber;
    console.log(isCorrect);
  };

  const generateGuessNumber = () => {
    setGuessedNumber(generateRandomNumber(minNumberRef.current, maxNumberRef.current));
  };

  const handleIsLowerNumber = () => {
    minNumberRef.current = guessedNumber;
    generateGuessNumber();
  };

  const handleIsBiggerNumber = () => {
    maxNumberRef.current = guessedNumber;
    generateGuessNumber();
  };

  useEffect(() => {
    checkNumber();
  }, [guessedNumber]);

  return { guessedNumber, handleIsLowerNumber, handleIsBiggerNumber };
};

export default useGameLogic;
