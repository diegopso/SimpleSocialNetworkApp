import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './src/Reducer/FriendReducer';
import AppNavigator from './src/AppNavigator';

const store = createStore(friendReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator /> 
      </Provider>
      );
  }
}
