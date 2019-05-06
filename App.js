import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import CalculatorScreen from "./src/screens/CalculatorScreen";

export default class App extends React.Component {
  state = {
    text: ""
  };
  createTextInputHandler = num => () =>
    this.setState({ text: this.state.text + num });

  render() {
    return (
      <View style={styles.container}>
        <CalculatorScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
