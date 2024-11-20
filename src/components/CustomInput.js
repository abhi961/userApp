import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { normalize } from '../theme/Normalize';

const CustomInput = ({
  placeholderText,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderText}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#fff',
    // borderWidth:2,
    borderRadius: 10,
    // borderColor:'#009688',
    width: '100%',
    alignSelf: 'center',
  },
  inputStyle: {
    color: '#262626',
    paddingHorizontal:normalize(18),
    fontSize:normalize(14),
    fontWeight:'500'
  },
});
