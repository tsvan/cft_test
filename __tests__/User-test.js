/**
 * @format
 */

import 'react-native';
import React from 'react';
import User from '../components/User';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <User
      key={1}
      userData={{name: 'test', email: 'test@email', gender: 'male'}}
    />,
  );
});
