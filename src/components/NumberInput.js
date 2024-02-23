import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import useCustomAlert from '../customHooks/useCustomAlert';
import CustomButton from './CustomButton';

export default function NumberInput({ onConfirm }) {
  const [inputNumber, setInputNumber] = useState('');
  const { showAlert } = useCustomAlert();

  function handleChangeNumber(input) {
    if (isNaN(Number(input))) {
      showAlert('Error', 'Invalid input');
      return;
    }
    setInputNumber(input);
  }

  function handleConfirmNumber() {
    if (Number(inputNumber) < 0) {
      showAlert('Error', 'Number must be positive');
      handleResetNumber();
      return;
    }
    onConfirm(inputNumber);
  }

  function handleResetNumber() {
    setInputNumber('');
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={handleChangeNumber}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton text="Reset" onTap={handleResetNumber} />
        <CustomButton text="Confirm" onTap={handleConfirmNumber} />
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
});
