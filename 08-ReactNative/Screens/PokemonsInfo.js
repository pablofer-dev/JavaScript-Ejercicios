import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListItem, Avatar, Image } from '@rneui/themed';
import { SvgUri } from 'react-native-svg';

function DetallesScreen({ route, navigation }) {
    /* Abilitys  Stats*/
    let idpokemon = route.params.id + 1;
    const [pokemons, setPokemonsInfo] = useState([]);
    var pokemons_array = [];
    async function pokemonsInfo() {
        const url = `https://pokeapi.co/api/v2/pokemon/${idpokemon}/`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.sprites.other.dream_world);
        let jsonGenerator = { avatar_url: data.sprites.front_default, name: data.forms[0].name.toUpperCase(), subtitle: data.types[0].type.name, abilities: "", stats: data.stats };
        for (let e = 0; e < data.abilities.length; e++) {
            jsonGenerator.abilities += data.abilities[e].ability.name + " ";
        }
        for (let r = 0; r < data.types.length; r++) {
            jsonGenerator.subtitle += data.types[r].type.name + " "
        }
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
                        <ListItem key={index} containerStyle={{ backgroundColor: "rgba(189, 189, 189, 0.596);" }}>
                            <Image
                                source={{ uri: l.avatar_url }}
                                style={{ width: 200, height: 200 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <ListItem.Content >

                                <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>Type: </ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitle}>{l.subtitle}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitle}>Abilitys: </ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitle}>{l.abilities}</ListItem.Subtitle>
                            </ListItem.Content>

                        </ListItem>


                    ))

                }
            </View>
            <View>
                {pokemons.length == 0 ? <ActivityIndicator size="large" /> :
                    pokemons.map((l, index) => (
                        <ListItem key={index} containerStyle={{ backgroundColor: "rgba(189, 189, 189, 0.596);" }}>
                            <ListItem.Content >
                                <ListItem.Title style={styles.title}>Types</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>{l.subtitle}</ListItem.Subtitle>

                            </ListItem.Content>
                            <ListItem.Content >
                                <ListItem.Title style={styles.title}>Abilitys</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>{l.abilities}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>



                    ))

                }
            </View>
        </ScrollView>
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
});
export default DetallesScreen;