import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './src/screens/Home';
import { useState } from 'react';
import OnGameScreen from './src/screens/OnGameScreen';

export default function App() {
  const [gameNumber, setGameNumber] = useState(0);
  function handleChosenNumber(chosenNumber) {
    console.log(chosenNumber);
    setGameNumber(chosenNumber);
  }
  return (
    <ImageBackground
      source={require('./assets/background.png')} // Ruta de tu imagen
      style={styles.backgroundImage}
    >
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
        {/* <Home onChooseNumber={handleChosenNumber} /> */}
        <OnGameScreen />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
