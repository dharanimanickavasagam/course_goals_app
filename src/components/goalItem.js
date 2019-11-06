import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const GoalItem = ({ data }) => {
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
        <View style={styles.listItem}>
          <Text> {itemData.item}</Text>
        </View>
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
