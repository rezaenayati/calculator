import React from "react";
import { StyleSheet, Text } from "react-native";

import Button from "./Button";

export default (ButtonWithText = ({ style, onPress, text, textStyle }) => (
  <Button style={style} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </Button>
));

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlignVertical: "center",
    textAlign: "center"
  }
});
