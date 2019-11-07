import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  StyleSheet
} from "react-native";

const GoalItem = ({ data, onDelete }) => {
  return (
    //  <View>
    //     {data.map((datum, index) => (
    //       <Text key={index}> {datum}</Text>
    //     ))}
    //   </View>

    <FlatList
      keyExtractor={(item, index) => item}
      data={data}
      renderItem={itemData => (
        <TouchableOpacity onPress={() => onDelete(itemData.item)}>
          <View style={styles.listItem}>
            <Text> {itemData.item}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "black",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    marginVertical: 3
  }
});
