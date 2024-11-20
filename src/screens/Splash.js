import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGE} from '../theme/image';
import {normalize} from '../theme/Normalize';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#00b3b3"
        // translucent={true}
        style="light"
        barStyle={'default'}
      />
      <View>
        <Image source={IMAGE.Logo} style={styles.logoImage} />
        <Text style={styles.userText}>UserAPP</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b3b3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    resizeMode: 'contain',
    width: normalize(60),
    height: normalize(60),
    tintColor: 'white',
    // marginTop:normalize(30),
  },
  userText: {
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginTop: normalize(8),
    alignSelf: 'center',
  },
});
