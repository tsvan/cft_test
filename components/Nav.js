import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ADD_USER, USER_LIST} from '../App';

export default function Nav(props) {
  const route = useRoute();

  const buttonBgColor = function (button) {
    return route.name === button
      ? {backgroundColor: '#313030'}
      : {backgroundColor: '#888b8d'};
  };
  const buttonTextColor = function (button) {
    return route.name === button ? {color: '#eeeeee'} : {color: '#151414'};
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(USER_LIST)}
          style={[styles.button, buttonBgColor(USER_LIST)]}>
          <Text style={[styles.buttonText, buttonTextColor(USER_LIST)]}>
            Пользователи
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(ADD_USER)}
          style={[styles.button, buttonBgColor(ADD_USER)]}>
          <Text style={[styles.buttonText, buttonTextColor(ADD_USER)]}>
            Новый пользователь
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
  },
  container: {
    width: '100%',
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    alignContent: 'center',
    padding: 1,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
