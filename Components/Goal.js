import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Goal = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)} activeOpacity={0.8}>
      <View style={styles.goal} >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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