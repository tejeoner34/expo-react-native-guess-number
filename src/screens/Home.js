import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NumberInput from '../components/NumberInput';
import Title from '../components/Title';

export default function Home({ onChooseNumber }) {
  function handleChooseNumber(number) {
    onChooseNumber(number);
  }
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.homeContainer}>
          <Title text="Guess My Number" />
          <NumberInput onConfirm={handleChooseNumber} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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
