import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';


export default function ApodCard({ data }) {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.img} source={{ url: data.url }}/>
        <Text style={styles.date}>Date : {data.date}</Text>
        <Text style={styles.explan}>Explanation : {data.explanation}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eee",
    marginHorizontal: "1%",
    marginVertical: "1%",
  },
  img: {
    flex: 1,
    width: "auto",
    height: 300,
    maxHeight: 500,
    resizeMode: 'contain',
    marginVertical: "5%"
  },
  date: {
    flex: 0.1,
    marginHorizontal: "2%",
  },
  explan: {
    flex: 0.4,
    marginHorizontal: "2%",
    marginVertical: "2%"
  },
});
