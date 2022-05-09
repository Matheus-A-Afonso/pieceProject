import { Component } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login.js'
import Topics from './src/screens/Topics.js'
import fonts from './src/styles/fonts'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <Login />
//   );
// }.
class App extends Component {
 

  async componentDidMount(){
    await fonts.loadFonts()
  }
  render(){
    return (
      //<Text>Vai se foder</Text>
      //<Login />
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen
            name="Login"
            component={Login}
          />
            <Stack.Screen
            name="Topics"
            component={Topics}
          />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
