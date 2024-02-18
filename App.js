import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import { useState } from 'react';

export default function App() {
  const [gameNumber, setGameNumber] = useState(0);
  function handleChosenNumber(chosenNumber) {
    console.log(chosenNumber);
    setGameNumber(chosenNumber);
  }
  return (
    <View style={styles.container}>
      <Home onChooseNumber={handleChosenNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
