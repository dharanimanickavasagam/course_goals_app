import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

const GoalItem = ({ data }) => {
  return (
    //  <View>
    //     {goals.map((goal, index) => (
    //       <Text key={index}> {goal}</Text>
    //     ))}
    //   </View>

    <FlatList
      keyExtractor={(item, index) => item}
      data={data}
      renderItem={itemData => (
        <View>
          <Text> {itemData.item}</Text>
        </View>
      )}
    />
  );
};

export default GoalItem;
