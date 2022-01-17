import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from './Screens/UsersScreen';
import AddUserScreen from './Screens/AddUserScreen';

const Stack = createNativeStackNavigator();

export const USER_LIST = 'UsersList';
export const ADD_USER = 'AddUser';

export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={USER_LIST}
            component={UsersScreen}
            options={{title: USER_LIST}}
          />
          <Stack.Screen name={ADD_USER} component={AddUserScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
