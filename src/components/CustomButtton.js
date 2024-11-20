import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../theme/Normalize';
import {NavigationRouteContext} from '@react-navigation/native';

const CustomButtton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={onPress}>
      <Text style={styles.loginText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#009688',
    paddingTop: normalize(13),
    paddingBottom: normalize(13),
    width: '80%',
    borderRadius: normalize(25),
    alignSelf: 'center',
    // marginTop:normalize(30),
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(16),
    fontWeight: 'bold',
    letterSpacing:2
  },
});
