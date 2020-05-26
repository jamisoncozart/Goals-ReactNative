import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList } 
  from 'react-native';
import Goal from './Components/Goal';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function handleAddingNewGoal(enteredGoal) {
    setGoalList(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal}]);
  }

  function removeGoalHandler(goalId) {
    setGoalList(currentGoals => currentGoals.filter(goal => goal.id != goalId));
  }

  return (
    <View style={styles.screen}>
      <GoalInput 
        onAddGoal={handleAddingNewGoal}/>
      <FlatList 
        keyExtractor={item => item.id}
        data={goalList} 
        renderItem={itemData => (
        <Goal 
          title={itemData.item.value} 
          id={itemData.item.id}
          onDelete={removeGoalHandler} />
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});