import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Welcome</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#222222',
  },
});
