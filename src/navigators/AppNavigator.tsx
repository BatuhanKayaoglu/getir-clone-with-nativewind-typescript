import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import CartScreen from '../screens/CartScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="BottomTabs" component={BottomNavigator} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
            <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
        </Stack.Navigator>
    );
}
