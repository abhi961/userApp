import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {getMeetingListRequest} from '../redux/reducer/GetUserReducer';
import connectionrequest from '../helper/NetInfo';
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../theme/Normalize';
import Modal from 'react-native-modal';
import { IMAGE } from '../theme/image';

const Home = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);
  const GetUserReducer = useSelector(state => state.GetUserReducer);
  console.log(GetUserReducer?.getUserRes, 'Meetingzlist---------------->');
  const userData = AuthReducer?.signinResponse;
  const [isVisible, setIsVisible] = useState(false);
  const [mlist, setMlist] = useState('');
  // console.log(AuthReducer?.signinResponse?.email, 'HomeData66-------->');

  const getMeetingList = () => {
    let obj = {
      user_id: userData?.user_id,
    };
    connectionrequest()
      .then(() => {
        dispatch(getMeetingListRequest(obj));
        setIsVisible(true);
        setMlist();
        // navigation.navigate('Home');
      })
      .catch(err => {
        Toast('Please connect To Internet');
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.detailsView}>
          <Text style={styles.userDetails}>User Details</Text>
          <View style={styles.underLine} />
          <View style={styles.userNameView}>
            <Text
              style={{
                color: '#333333',
                fontSize: normalize(15),
                fontWeight: 'bold',
              }}>
              User Name
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(15),
                fontWeight: '500',
              }}>
              {userData?.username}
            </Text>
          </View>
          <View style={styles.userNameView}>
            <Text
              style={{
                color: '#333333',
                fontSize: normalize(15),
                fontWeight: 'bold',
              }}>
              First_Name
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(15),
                fontWeight: '500',
              }}>
              {userData?.first_name}
            </Text>
          </View>
          <View style={styles.userNameView}>
            <Text
              style={{
                color: '#333333',
                fontSize: normalize(15),
                fontWeight: 'bold',
              }}>
              Last_Name
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(15),
                fontWeight: '500',
              }}>
              {userData?.last_name}
            </Text>
          </View>
          <View style={styles.userNameView}>
            <Text
              style={{
                color: '#333333',
                fontSize: normalize(15),
                fontWeight: 'bold',
              }}>
              Email
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(15),
                fontWeight: '500',
              }}>
              {userData?.email}
            </Text>
          </View>
          <View style={styles.userNameView}>
            <Text
              style={{
                color: '#333333',
                fontSize: normalize(15),
                fontWeight: 'bold',
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(15),
                fontWeight: '500',
              }}>
              {userData?.phone}
            </Text>
          </View>
          <View style={styles.userNameView}>
            <Text
              style={{
                color: '#333333',
                fontSize: normalize(15),
                fontWeight: 'bold',
              }}>
              Designation
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: normalize(15),
                fontWeight: '500',
              }}>
              {userData?.designation}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => getMeetingList()}
        style={styles.meetingListbtn}>
        <Text style={styles.btnText}>Meeting List</Text>
      </TouchableOpacity>

      <Modal
        backdropColor="transparent"
        style={{margin: 0}}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        isVisible={isVisible}
        animationInTiming={1000}
        animationOutTiming={800}
        onBackdropPress={() => setIsVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ddd',
            position: 'absolute',
            // top:0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: '#fff',
            borderRadius: normalize(7),

            height: normalize(200),
            paddingLeft: normalize(15),
            paddingBottom: normalize(15),
            paddingTop: normalize(10),
          }}>
          <View>
            <Text style={styles.mlistText}>Meeting List</Text>
            {mlist?.length > 0 ? (
              <Text>List</Text>
            ) : (
              <Image source={IMAGE.list} style={styles.listImg} />
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '90%',
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
  userDetails: {
    color: '#009688',
    fontSize: normalize(18),
    fontWeight: '600',
  },
  detailsView: {
    padding: normalize(20),
  },
  underLine: {
    backgroundColor: '#000',
    width: '28%',
    marginTop: normalize(10),
    height: 2,
  },
  userNameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  meetingListbtn: {
    backgroundColor: '#009688',
    marginTop: normalize(20),
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    borderRadius: normalize(10),

    width: '60%',
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: normalize(15),
    textAlign: 'center',
  },
  mlistText: {
    color: '#000',
    fontSize: normalize(14),
    fontWeight: '600',
  },
  noListText: {
    color: '#c1c1c1',
    marginTop: normalize(16),
  },
  listImg:{
    resizeMode:'contain',
    width:normalize(50),
    height:normalize(50),
    marginTop:normalize(40),
    alignSelf:'center'
  }
});
