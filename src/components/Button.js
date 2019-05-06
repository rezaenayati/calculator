import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class Button extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.container, this.props.style]}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
});
