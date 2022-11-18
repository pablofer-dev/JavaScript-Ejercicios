import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// Screens\Pokemons.js
import DetallesScreen from "../Screens/PokemonsInfo.js"
import PokemonsScreen from '../Screens/Pokemons.js';
// Home Component
function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pokemons" style={styles.container}>
                <Stack.Screen options={{
                    title: 'Pokemons',
                    headerStyle: {
                        backgroundColor: 'gray',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} name="Pokemons" component={PokemonsScreen} />
                <Stack.Screen options={{
                    title: 'Pokemons',
                    headerStyle: {
                        backgroundColor: 'gray',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} name="Detalles" component={DetallesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
//Styles Component
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
});
export default HomeScreen;