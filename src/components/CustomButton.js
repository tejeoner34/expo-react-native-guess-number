import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function CustomButton({ text, onTap }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={onTap}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8a4c5c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
