import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderComponent from './components/structure/headerComponent';
import { appStyles } from './styles/App.style';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/stack.router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <View style={appStyles.container}>
        <HeaderComponent/>
        <NavigationContainer>
          <Stack.Navigator>
            {
              Routes.map((route) => (
                <Stack.Screen 
                  key={route.name}
                  name={route.name}
                  component={route.screen}
                  options={{
                    headerShown: false
                  }}
                />
              ))
            }
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default App;
