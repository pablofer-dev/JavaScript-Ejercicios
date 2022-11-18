import { useEffect, useState } from 'react';
import { Button, Text, StyleSheet, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem, Avatar } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  var pokemons_array = [];
  async function pokemonsPritn() {
    for (let j = 1; j <= 100; j++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${j}/`
      const response = await fetch(url)
      const data = await response.json()
      let jsonGenerator = { avatar_url: data.sprites.front_default, name: data.forms[0].name.toUpperCase(), subtitle: data.types[0].type.name };
      await pokemons_array.push(jsonGenerator);
    }
    setPokemons(pokemons_array);
  }
  useEffect(() => {
    pokemonsPritn();
    return () => {
      true
    };
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {pokemons.length == 0 ? <ActivityIndicator size="large" /> :
            pokemons.map((l, index) => (
              <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('Details')
              }
              }>
          <ListItem style={styles.container}>
            <Avatar size="large"
              title="LW"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7} source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title styles={styles.title}>{l.name}</ListItem.Title>
              <ListItem.Subtitle> Type: {l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        ))
          }
      </View>
    </ScrollView>
    </SafeAreaView >

  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  title: {
    fontSize: 50,
  },

});
export default App;
