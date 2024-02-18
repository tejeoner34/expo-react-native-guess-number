import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import useCustomAlert from '../customHooks/useCustomAlert';

export default function NumberInput({ onConfirm }) {
  const [inputNumber, setInputNumber] = useState(0);
  const { showAlert } = useCustomAlert();

  function handleChangeNumber(input) {
    setInputNumber(Number(input));
  }

  function handleConfirmNumber() {
    if (inputNumber < 0) {
      showAlert('Error', 'Number must be positive');
      return;
    }
    onConfirm(inputNumber);
  }

  function handleResetNumber() {
    setInputNumber(0);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={handleChangeNumber}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.8}
          onPress={handleResetNumber}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.8}
          onPress={handleConfirmNumber}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#631547',
  },
  title: {
    fontSize: 25,
    color: 'orange',
  },
  input: {
    height: 40,
    width: 40,
    borderColor: 'gray',
    fontSize: 25,
    borderBottomWidth: 2,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8a4c5c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
