import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Avatar } from '@rneui/themed';
const axios = require('axios').default;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    for (let j = 0; j <= 4; j++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${j}`
      axios.get(url)
        .then(response => {
          let jsonGenerator = [{ avatar_url: response.data.sprites.front_default, name: response.data.forms[0].name, subtitle: response.data.types[0].type.name }]
          setPokemons(jsonGenerator)
        })
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {
            pokemons.map((l, i) => (

              <TouchableOpacity>
                <ListItem key={i} style={styles.container}>
                  <Avatar source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
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
