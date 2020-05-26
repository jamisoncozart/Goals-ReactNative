import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInputChange}
          value={enteredGoal} 
          placeholder='Goal' 
          style={styles.input} />
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button
            title='ADD' 
            onPress={handleAddingNewGoal}/>
          </View>
          <View style={styles.button}>
            <Button
              title='CANCEL'
              color='red'
              onPress={() => props.setShowModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 10, 
    padding: 5, 
    width: '80%'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})

export default GoalInput