import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

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
        <View>
          <Text> {itemData.item}</Text>
        </View>
      )}
    />
  );
};

export default GoalItem;
