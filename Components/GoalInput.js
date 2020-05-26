import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  function handleGoalInputChange(enteredText) {
    setEnteredGoal(enteredText);
  }

  function handleAddingNewGoal() {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleGoalInputChange}
        value={enteredGoal} 
        placeholder='Goal' 
        style={styles.input} />
      <Button 
        title='ADD' 
        onPress={handleAddingNewGoal}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 5, 
    padding: 5, 
    width: '80%'
  }
})

export default GoalInput