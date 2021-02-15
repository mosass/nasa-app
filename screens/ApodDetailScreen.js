import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ApodCard from '../components/ApodCard';

export default function ApodDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ApodCard mediaType="img" url="" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});