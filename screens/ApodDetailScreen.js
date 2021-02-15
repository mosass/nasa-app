import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ApodCard from '../components/ApodCard';

export default function ApodDetailScreen({ route }) {
  const { data } = route.params;
  return (
    <ApodCard data={data} />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
  },
});