import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ newGoal, onChangeText, onPress }) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Course goals"
          onChangeText={onChangeText}
          value={newGoal}
        />
        <Button title="Add" onPress={onPress} />
      </View>
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
