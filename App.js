import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import Home from './src/screens/Home';
import OnGameScreen from './src/screens/OnGameScreen';
import GameOver from './src/screens/GameOver';

let attempts = 0;

export default function App() {
  const [gameNumber, setGameNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  let screen = <Home onChooseNumber={handleChosenNumber} />;
  function handleChosenNumber(chosenNumber) {
    setGameNumber(Number(chosenNumber));
  }

  function handleGameOver(numberOfAttemsp) {
    attempts = numberOfAttemsp;
    setIsGameOver(true);
  }

  if (gameNumber) {
    screen = <OnGameScreen actualNumber={gameNumber} onGameOver={handleGameOver} />;
  }

  if (isGameOver) {
    screen = <GameOver actualNumber={gameNumber} attempts={attempts} />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.15 }}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
