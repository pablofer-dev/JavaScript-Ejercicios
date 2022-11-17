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

pokemonsSize().then(async function (response) {
  var list = [];
  await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${response.count}`).then(function (response) {
    list.push({ name: response.data.results[0].name, avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' });
    list.push({ name: response.data.results[1].name, avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' });
  }).catch(function (e) {
    console.log(e);
  });
  return list.map((item, i) => {
    <View>
      {
        <ListItem>
          key={i}
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{ source: { uri: item.avatar_url } }}
        </ListItem>
      }
    </View>
  })
});



export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
});
