import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title({ text, customStyles }) {
  return <Text style={[styles.titleText, customStyles]}>{text}</Text>;
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: screenWidth < 380 ? 20 : 30,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
  },
});
