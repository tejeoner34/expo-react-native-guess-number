import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NumberInput from '../components/NumberInput';

export default function Home({ onChooseNumber }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.titleText}>Guess My Number</Text>
      <NumberInput onConfirm={onChooseNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    gap: 35,
    paddingTop: 80,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
  },
});
