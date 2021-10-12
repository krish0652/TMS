import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LandingScreen from '../screens/landing/landing';

const Routes = [{
        name: "Landing",
        screen: LandingScreen
}, {
    name: "Landing2",
    screen: LandingScreen
}];

export default Routes;