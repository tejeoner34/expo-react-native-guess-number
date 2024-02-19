import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function GuessList({ guessesList }) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={guessesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.guessText}>#{item.id}</Text>
            <Text style={styles.idText}>{`Opponent's Guess: ${item.guessedNumber}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  listItem: {
    width: '95%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#3B021F',
    backgroundColor: '#DDB42E',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  idText: {
    fontWeight: 'bold',
    color: '#3B021F',
  },
  guessText: {
    color: '#3B021F',
  },
});
