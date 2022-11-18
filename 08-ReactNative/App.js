import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem, Avatar, Image } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function PokemonsScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  var pokemons_array = [];
  async function pokemonsPritn() {
    for (let j = 1; j <= 5; j++) {
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
    <ScrollView style={styles.container} >
      <View>
        {pokemons.length == 0 ? <ActivityIndicator size="large" /> :
          pokemons.map((l, index) => (
            <TouchableOpacity key={index} onPress={() => {
              navigation.navigate('Detalles', { id: index });
            }
            }>
              <ListItem containerStyle={{ backgroundColor: "rgba(189, 189, 189, 0.596);" }}>
                <Avatar size="large"
                  title="LW"
                  activeOpacity={0.7} source={{ uri: l.avatar_url }} />
                <ListItem.Content >
                  <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}> Type: {l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <Text style={styles.number}>{index + 1}</Text>
              </ListItem>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  );
}

function DetallesScreen({ route, navigation }) {
  /* Abilitys */
  let idpokemon = route.params.id + 1;
  const [pokemons, setPokemonsInfo] = useState([]);
  var pokemons_array = [];
  async function pokemonsInfo() {
    const url = `https://pokeapi.co/api/v2/pokemon/${idpokemon}/`
    const response = await fetch(url)
    const data = await response.json()
    let jsonGenerator = { avatar_url: data.sprites.front_default, name: data.forms[0].name.toUpperCase(), subtitle: data.types[0].type.name };
    await pokemons_array.push(jsonGenerator);
    setPokemonsInfo(pokemons_array);
  }
  useEffect(() => {
    pokemonsInfo();
    return () => {
      true
    };
  }, []);

  return (
    <ScrollView style={styles.container} >
      <View>
        {pokemons.length == 0 ? <ActivityIndicator size="large" /> :
          pokemons.map((l, index) => (
            <TouchableOpacity key={index} onPress={() => {
              navigation.navigate('Detalles', { id: index });
            }
            }>
              <ListItem containerStyle={{ backgroundColor: "rgba(189, 189, 189, 0.596);" }}>
                <Avatar size="large"
                  title="LW"
                  activeOpacity={0.7} source={{ uri: l.avatar_url }} />
                <ListItem.Content >
                  <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}> Type: {l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>

              </ListItem>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokemons" style={styles.container}>
        <Stack.Screen options={{
          title: 'Pokemons', //Set Header Title
          headerStyle: {
            backgroundColor: 'gray', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }} name="Pokemons" component={PokemonsScreen} />
        <Stack.Screen options={{
          title: 'Pokemons', //Set Header Title
          headerStyle: {
            backgroundColor: 'gray', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }} name="Detalles" component={DetallesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  subtitle: {
    fontSize: 15,
    color: 'rgb(204, 70, 70)',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 13,
    textAlign: 'right',
    color: '#fff',
  },
  text: {
    color: '#fff',
  }


});
export default App;
