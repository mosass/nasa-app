import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import {WebView} from 'react-native-webview';


export default function ApodCard({ data }) {
  return (
    <ScrollView style={styles.container}>
        {
          data.media_type === 'image' ? (
            <Image style={styles.img} source={{ url: data.url }}/>
          ): (
            <WebView
              style={styles.img}
              source={{uri: data.url}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          )
        }
        <Text style={styles.date}>Date : {data.date}</Text>
        <Text style={styles.date}>Type : {data.media_type}</Text>
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
