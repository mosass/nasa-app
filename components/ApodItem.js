import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Image } from "react-native";

export default function ApodItem({ data, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} >
        <View style={styles.container}>
            <Image style={styles.thumbnail} source={{url: data.url}} />
            <Text>{data.title}</Text>
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  thumbnail: {
    width: 100,
    height: 100,
  }
});
