import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  function handleGoalInputChange(enteredText) {
    setEnteredGoal(enteredText);
  }

  function handleAddingNewGoal() {
    setGoalList(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]);
    setEnteredGoal('');
  }

  return (
    <View style={styles.screen}>
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
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={goalList} 
        renderItem={itemData => (
        <View style={styles.goal}>
            <Text>{itemData.item.value}</Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
  },
  goal: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5
  }
});