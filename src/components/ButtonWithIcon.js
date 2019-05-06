import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Button from "./Button";

export default (ButtonWithIcon = ({ style, name, onPress }) => (
  <Button onPress={onPress} style={style}>
    <Ionicons name={name} size={50} color="white" />
  </Button>
));
