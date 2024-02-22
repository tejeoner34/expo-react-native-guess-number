import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './src/screens/Home';
import { useRef, useState } from 'react';
import OnGameScreen from './src/screens/OnGameScreen';
import GameOver from './src/screens/GameOver';

export default function App() {
  const [gameNumber, setGameNumber] = useState(0);
  const attempts = useRef(0);
  function handleChosenNumber(chosenNumber) {
    console.log(chosenNumber);
    setGameNumber(chosenNumber);
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')} // Ruta de tu imagen
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.15 }}
      >
        {/* <Home onChooseNumber={handleChosenNumber} /> */}
        <OnGameScreen />
        {/* <GameOver actualNumber={gameNumber} /> */}
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
