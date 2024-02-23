import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NumberInput from '../components/NumberInput';
import Title from '../components/Title';

export default function Home({ onChooseNumber }) {
  function handleChooseNumber(number) {
    onChooseNumber(number);
  }
  return (
    <View style={styles.homeContainer}>
      <Title text="Guess My Number" />
      <NumberInput onConfirm={handleChooseNumber} />
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
    gap: 35,
    paddingTop: 80,
  },
});
