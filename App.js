import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import UploadScreen from './screens/uploadScreen';
import LoginScreen from './screens/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <UploadScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
