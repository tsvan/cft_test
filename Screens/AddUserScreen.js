import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Nav from '../components/Nav';
import {saveUserData} from '../actions/userAction';
import {USER_LIST} from '../App';

export default function AddUserScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [gender, setGender] = React.useState('');
  let emailTextInput = null;

  function saveUser() {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!lengthCheck(name, 2, 50) || !lengthCheck(email, 5, 100) || !gender) {
      alert('Некорректная длина полей');
      return;
    }
    if (!re.test(email)) {
      alert('Заполните email корректно');
      return;
    }
    saveUserData({name, email, gender, status: 'active'}, userWasSavedCallback);
  }
  function lengthCheck(value, min, max) {
    return value && value.length >= min && value.length <= max;
  }

  function userWasSavedCallback(saved) {
    if (saved) {
      navigation.push(USER_LIST);
    } else {
      alert('Что-то пошло не так');
    }
  }

  return (
    <View style={styles.container}>
      <Nav navigation={navigation} />
      <View style={styles.addUserContainer}>
        <View style={styles.buttonsContainer}>
          <TextInput
            placeholderTextColor="#5d5a5a"
            style={styles.input}
            placeholder={'Имя'}
            onChangeText={setName}
            value={name}
            onSubmitEditing={() => {
              emailTextInput.focus();
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#5d5a5a"
            placeholder={'E-mail'}
            onChangeText={setEmail}
            value={email}
            ref={input => {
              emailTextInput = input;
            }}
          />
          <View style={styles.picker}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              onValueChange={setGender}
              style={pickerSelectStyles}
              placeholder={{label: 'Пол', color: 'black', fontSize: 16}}
              items={[
                {key: 0, label: 'Мужской', value: 'female'},
                {key: 1, label: 'Женский', value: 'male'},
              ]}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            disabled={!name || !email || !gender}
            onPress={() => saveUser()}
            style={styles.saveButton}>
            <Text style={styles.buttonText}>Создать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
  },
  input: {
    fontSize: 16,
    height: 50,
    padding: 10,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#c7c7c7',
  },
  picker: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#c7c7c7',
  },
  addUserContainer: {
    flex: 1,
    width: '100%',
  },
  buttonsContainer: {
    flex: 0.8,
  },
  saveButton: {
    alignContent: 'flex-end',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#313030',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#eeeeee',
  },
  footer: {
    width: '100%',
    flex: 0.2,
    justifyContent: 'flex-end',
    padding: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#c7c7c7',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 5,
  },
  inputAndroid: {
    fontSize: 16,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#c7c7c7',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 5,
  },
  placeholder: {
    color: '#5d5a5a',
  },
});
