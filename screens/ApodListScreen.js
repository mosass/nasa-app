import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ApodItem from '../components/ApodItem'


export default function ApodListScreen({ navigation }) {
  const data = {
    type: "image",
    url: "https://i.ytimg.com/vi/8ivDKd3DmMg/hqdefault.jpg"
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
        <ApodItem
          data={data} 
          onPress={() => navigation.navigate("Detail") } />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
  },
  scroller: {
    height: "100%"
  }
});