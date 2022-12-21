import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';


const App = () => {
  return (
    <View style={styles.view}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  text: {
    textAlign: "center",
  },
});

export default App;
