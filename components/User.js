import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function User(props) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userNameText}>{props.userData.name}</Text>
        <Text style={styles.userEmailText}>{props.userData.email}</Text>
      </View>
      <View style={styles.userGender}>
        <Text style={styles.userGenderText}>{props.userData.gender}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    flexDirection: 'row',
    width: '100%',
  },
  userInfo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  },
  userGender: {
    flex: 1,
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  userEmailText: {
    fontSize: 12,
  },
  userGenderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
