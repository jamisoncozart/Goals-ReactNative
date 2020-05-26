import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  Button } 
  from 'react-native';
import Goal from './Components/Goal';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleAddingNewGoal(enteredGoal) {
    setGoalList(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal}]);
    setShowModal(false);
  }

  function removeGoalHandler(goalId) {
    setGoalList(currentGoals => currentGoals.filter(goal => goal.id != goalId));
  }

  return (
    <View style={styles.screen}>
      <Button 
        style={styles.addButton} 
        title='Add New Goal' 
        onPress={() => setShowModal(true)} />
      <FlatList 
        keyExtractor={item => item.id}
        data={goalList} 
        renderItem={itemData => (
          <Goal 
          title={itemData.item.value} 
          id={itemData.item.id}
          onDelete={removeGoalHandler} />
          )}/>
      <GoalInput 
        setShowModal={setShowModal}
        onAddGoal={handleAddingNewGoal} 
        visible={showModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  addButton: {
    marginBottom: 50
  }
});