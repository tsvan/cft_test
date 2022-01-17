/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => 'NavigationContainer');
jest.mock('@react-navigation/native-stack', () => 'createNativeStackNavigator');
jest.mock('../App', () => () => 'USER_LIST');

it('renders correctly', () => {
  renderer.create(<App />);
});
