import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import Home from './src/screens/Home';
import OnGameScreen from './src/screens/OnGameScreen';
import GameOver from './src/screens/GameOver';
import useCustomFonts from './src/customHooks/useCustomFonts';

let attempts = 0;

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded } = useCustomFonts();
  const [gameNumber, setGameNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const handleChosenNumber = (chosenNumber) => {
    setGameNumber(Number(chosenNumber));
  };

  const handleGameOver = (numberOfAttemsp) => {
    attempts = numberOfAttemsp;
    setIsGameOver(true);
  };

  const handleRestart = () => {
    setGameNumber(null);
    setIsGameOver(false);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  let screen = <Home onChooseNumber={handleChosenNumber} />;

  if (gameNumber) {
    screen = <OnGameScreen actualNumber={gameNumber} onGameOver={handleGameOver} />;
  }

  if (isGameOver) {
    screen = <GameOver actualNumber={gameNumber} attempts={attempts} onRestart={handleRestart} />;
  }

  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.container}
      onLayout={onLayoutRootView}
    >
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
