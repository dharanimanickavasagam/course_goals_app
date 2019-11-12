import React, { useState } from "react";
import { Modal, View, Button, StyleSheet } from "react-native";
import GoalInput from "./src/components/goalInput";
import GoalItem from "./src/components/goalItem";

export default function App() {
  const [newGoal, setNewGoal] = React.useState("");
  const [goals, setGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoal}>
        <Button title="Add goal" onPress={toggleModal} />
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        style={styles.modal}
      >
        <View style={styles.addGoalContainer}>
          <GoalInput
            onChangeText={handleInputText}
            newGoal={newGoal}
            onPress={handleAddGoal}
          />

          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
      <GoalItem data={goals} onDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  addGoal: {
    marginBottom: 10
  },
  modal: {
    display: "flex",
    flexDirection: "column"
  },
  addGoalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});
