import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';
import GuessList from '../components/GuessList';
import useGameLogic from '../customHooks/useGameLogic';
import { useEffect } from 'react';

const exampleData = [
  { id: 1, guessedNumber: 42 },
  { id: 2, guessedNumber: 18 },
  { id: 3, guessedNumber: 65 },
];

export default function OnGameScreen({ actualNumber, onGameOver }) {
  const { isGameOver, guesses, guessedNumber, handleIsLowerNumber, handleIsBiggerNumber } =
    useGameLogic(actualNumber);

  useEffect(() => {
    if (isGameOver) {
      onGameOver(guesses.length);
    }
  }, [isGameOver]);

  return (
    <View style={styles.gameContainer}>
      <Title text="Opponent´s Guess" />
      <Title text={String(guessedNumber)} customStyles={styles.opponentNumber} />
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Higher or Lower</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton text="-" onTap={handleIsLowerNumber} />
          <CustomButton text="+" onTap={handleIsBiggerNumber} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <GuessList guessesList={guesses} />
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: 35,
    paddingTop: 50,
  },
  opponentNumber: {
    padding: 30,
    width: '80%',
    textAlign: 'center',
    fontSize: screenWidth < 380 ? 25 : 35,
    fontWeight: 'bold',
    borderRadius: 7,
  },
  inputContainer: {
    width: '80%',
    padding: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#631547',
  },
  inputTitle: {
    fontSize: screenWidth > 380 ? 25 : 20,
    color: 'orange',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
});
