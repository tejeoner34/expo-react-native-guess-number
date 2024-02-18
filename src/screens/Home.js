import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NumberInput from '../components/NumberInput';
import Title from '../components/Title';

export default function Home({ onChooseNumber }) {
  return (
    <View style={styles.homeContainer}>
      <Title text="Guess My Number" />
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
});
