import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';

export default function GameOver({ actualNumber = 0 }) {
  return (
    <View style={styles.gameOverContainer}>
      <Title text="GAME OVER!" />
      <Image source={require('../../assets/success.png')} style={styles.image} />
      <Text style={styles.text}>
        Your phone needed {actualNumber} to guess {actualNumber}
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton text="Start new game" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'brown',
  },
  text: {
    fontSize: 25,
  },
  buttonContainer: {
    height: 50,
  },
});
