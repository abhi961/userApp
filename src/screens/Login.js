import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGE} from '../theme/image';
import CustomInput from '../components/CustomInput';
import {normalize} from '../theme/Normalize';
import CustomButtton from '../components/CustomButtton';
import Toast from '../helper/Toast';
import {useDispatch, useSelector} from 'react-redux';
import connectionrequest from '../helper/NetInfo';
import {signinRequest} from '../redux/reducer/AuthReducer';
import {useNavigation} from '@react-navigation/native';
import {getMeetingListRequest} from '../redux/reducer/GetUserReducer';

let status;
const Login = () => {
  const navigation = useNavigation();
  const AuthReducer = useSelector(state => state.AuthReducer);
  // console.log(AuthReducer?.signinResponse,"LoginData----------->")
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = email => {
    return emailRegex.test(email);
  };

  const loginHandler = () => {
    try {
      const emailvalid = validateEmail;

      if (!email) {
        Toast('Enter email address');
      } else if (!emailvalid) {
        Toast('Enter valid email addess');
      } else if (!password) {
        Toast('Enter password');
      } else {
        let obj = {
          email: email,
          password: password,
        };
        connectionrequest()
          .then(() => {
            dispatch(signinRequest(obj));

            // navigation.navigate('Home');
          })
          .catch(err => {
            Toast('Please connect To Internet');
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (status == '' || AuthReducer.status != status) {
    switch (AuthReducer.status) {
      case 'Auth/signinRequest':
        status = AuthReducer.status;
        setLoading(true);
        break;
      case 'Auth/signinSucess':
        status = AuthReducer.status;
        setLoading(false);
        navigation.navigate('Home');
        break;
      case 'Auth/signinFailure':
        status = AuthReducer.status;
        // setLoaderData(false);
        break;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#00b3b3"
        // translucent={true}
        style="light"
        barStyle={'default'}
      />
       {loading === true && (
           <View
           style={{
             flex: 1,
             position: 'absolute',
             backgroundColor: 'rgba(0,0,0,.5)',
             width: '100%',
             height: '100%',
             zIndex: 999,
             justifyContent: 'center',
             alignItems: 'center',
           }}>
           <ActivityIndicator size={'large'} color={'#fff'} value={loading} />
         </View>
       )}
      <View style={styles.inputConatiner}>
        <Text style={styles.loginText}>Login</Text>
        <CustomInput
          placeholder={'Enter email address'}
          placeholderText={'#b3b3b3'}
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <View style={styles.heightView}>
          <CustomInput
            placeholder={'Enter Password'}
            placeholderText={'#b3b3b3'}
            value={password}
            onChangeText={val => setPassword(val)}
            secureTextEntry={true}
          />
        </View>
        <View></View>
        <CustomButtton text={'Login'} onPress={() => loginHandler()} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    height: '100%',
  },
  heightView: {
    marginVertical: normalize(16),
  },
  imageView: {
    width: normalize(20),
    height: normalize(20),
    borderColor: '#009688',
    borderWidth: 1.5,
    borderRadius: normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputConatiner: {
    padding: normalize(20),
    marginTop: normalize(80),
  },
  loginText: {
    textAlign: 'center',
    fontSize: normalize(15),
    fontWeight: 'bold',
    color: '#009688',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: normalize(20),
  },
});
