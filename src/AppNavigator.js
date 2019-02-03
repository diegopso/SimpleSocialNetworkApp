import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Screen/Home';
import Friends from './Screen/Friends';

export default createAppContainer(createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
}));