import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Image } from "react-native";

export default function ApodItem({ data, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} >
        <View style={styles.container}>
            <Image style={styles.thumbnail} source={{url: data.url}} />
            <View style={styles.text}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.date}>{data.date}</Text>
            </View>
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
    marginHorizontal: "1%",
    marginVertical: "1%",
  },
  thumbnail: {
    flex: 0.3,
    width: 100,
    height: 100,
  },
  text: {
    flex: 0.7,
    flexDirection: "column",
  },
  title: {
    flex: 0.8,
    lineHeight: 30,
    fontSize: 16,
    marginHorizontal: "2%"
  },
  date: {
    flex: 0.2,
    fontSize: 16,
    color: "#aaa",
    marginHorizontal: "2%"
  },
});
