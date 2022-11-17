import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Avatar } from '@rneui/themed';
const axios = require('axios').default;

async function pokemonsSize() {
  lista = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1').then(function (response) {
    return response.data;
  }).catch(function (e) {
    console.log(e);
  });
  return lista;
}

async function pokemons() {
  a = pokemonsSize().then(async function (response) {
    list = []
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${response.count}`).then(function (response) {
      list.push({ name: response.data.results[0].name, avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' });
      list.push({ name: response.data.results[1].name, avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' });
    }).catch(function (e) {
      console.log(e);
    });
    return list;
  });
  return a;
}
list = [
  pokemons().then(response => {
    console.log(response);
    return response;
  }),
]

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {
            list.map((l, i) => (
              <ListItem key={i} bottomDivider styles={styles.container}>
                <Avatar source={{ uri: l.avatar_url }} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
