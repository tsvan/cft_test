/**
 * @format
 */

import 'react-native';
import React from 'react';
import UsersScreen from '../Screens/UsersScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('@react-navigation/native', () => 'NavigationContainer');
jest.mock('@react-navigation/native-stack', () => 'createNativeStackNavigator');
jest.mock('../actions/userAction', () => 'getUsersList');
jest.mock('../App', () => () => 'USER_LIST');
jest.mock('../components/Nav', () => () => 'Nav');

it('renders correctly', () => {
  renderer.create(<UsersScreen />);
});
