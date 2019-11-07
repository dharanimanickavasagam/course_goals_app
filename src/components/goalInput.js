import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import GoalItem from "./goalItem";

const GoalInput = () => {
  const [newGoal, setNewGoal] = React.useState("");
  const [goals, setGoal] = useState([]);

  const handleInputText = ev => {
    setNewGoal(ev);
  };

  const handleAddGoal = () => {
    setGoal(() => [...goals, newGoal]);
    setNewGoal("");
  };

  const handleDelete = toBeDeletedGoal => {
    const goalsAfterDeletion = goals.filter(goal => goal !== toBeDeletedGoal);
    setGoal(goalsAfterDeletion);
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Course goals"
          onChangeText={handleInputText}
          value={newGoal}
        />
        <Button title="Press" onPress={handleAddGoal} />
      </View>

      <GoalItem data={goals} onDelete={handleDelete} />
    </React.Fragment>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: "flex",
    flexDirection: "row"
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 2,
    height: 40,
    flex: 1,
    marginRight: 5
  }
});
