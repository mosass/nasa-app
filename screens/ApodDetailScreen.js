import React from 'react';
import { StyleSheet } from 'react-native';
import ApodCard from '../components/ApodCard';

export default function ApodDetailScreen({ route }) {
  const { data } = route.params;
  return (
    <ApodCard data={data} />
  );
}

