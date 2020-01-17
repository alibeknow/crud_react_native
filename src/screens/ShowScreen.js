import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  let itemId = navigation.getParam("id");
  const { state } = useContext(Context);
  return (
    <View>
      <Text>Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
