import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './src/navigators/BottomNavigator';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaView>

  );
}

