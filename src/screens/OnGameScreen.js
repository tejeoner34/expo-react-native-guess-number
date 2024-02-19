import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';
import GuessList from '../components/GuessList';

const exampleData = [
  { id: 1, guessedNumber: 42 },
  { id: 2, guessedNumber: 18 },
  { id: 3, guessedNumber: 65 },
  // Agrega más objetos según sea necesario
];

export default function OnGameScreen() {
  return (
    <View style={styles.gameContainer}>
      <Title text="Opponent´s Guess" />
      <Title text="57" customStyles={styles.opponentNumber} />
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Higher or Lower</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton text="Reset" />
          <CustomButton text="Confirm" />
        </View>
      </View>
      <View>
        <GuessList guessesList={exampleData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 35,
    paddingTop: 50,
  },
  opponentNumber: {
    padding: 30,
    width: '80%',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    borderRadius: 7,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#631547',
  },
  inputTitle: {
    fontSize: 25,
    color: 'orange',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
});
