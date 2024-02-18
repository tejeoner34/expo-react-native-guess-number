import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title({ text, customStyles }) {
  return <Text style={[styles.titleText, customStyles]}>{text}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
  },
});
