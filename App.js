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
    setGoalList(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput 
        onAddGoal={handleAddingNewGoal}/>
      <FlatList 
        keyExtractor={item => item.id}
        data={goalList} 
        renderItem={itemData => (
        <Goal title={itemData.item.value} key={itemData.item.id} />
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});