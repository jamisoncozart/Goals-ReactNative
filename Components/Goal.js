import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Goal = props => {
  return (
    <View style={styles.goal}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5
  }
});

export default Goal;