import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ApodCard({ mediaType, url }) {
  return (
    <View style={styles.container}>
        <Text>APOD Card {mediaType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
