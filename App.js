import {StyleSheet, Text, View, LogBox} from 'react-native';
import React from 'react';
import StackNav from './src/Navigation/StackNav';
import {Provider} from 'react-redux';
import store from './src/redux/store';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
