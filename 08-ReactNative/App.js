import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Avatar } from '@rneui/themed';
const fetch = require('node-fetch');

export default function App({ navigation, params }) {
  const [pokemons, setPokemons] = useState([]);
  var pokemons_array = [];
  async function pokemonsPritn() {
    for (let j = 1; j <= 100; j++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${j}/`
      const response = await fetch(url)
      const data = await response.json()
      let jsonGenerator = { avatar_url: data.sprites.front_default, name: data.forms[0].name, subtitle: data.types[0].type.name };
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
            pokemons.map((l, i) => (
              <TouchableOpacity>
                <ListItem key={i} style={styles.container}>
                  <Avatar source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle> Tipo {l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
});
