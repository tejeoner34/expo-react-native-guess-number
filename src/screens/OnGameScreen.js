import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function OnGameScreen() {
  return (
    <View style={styles.gameContainer}>
      <Title text="Opponent´s Guess" />
      <Title text="57" customStyles={styles.opponentNumber} />
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
    backgroundColor: 'red',
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
});
