import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Card({ title, date, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cards}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    alignItems: 'center', 
    borderRadius: 25,
    marginHorizontal: 10,
    padding: 10,
    height: 128,
    width: 190,
    backgroundColor: '#4EA3FF',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },
  text: {},
})