import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem, Avatar, Image, Button } from '@rneui/themed';
import QRCode from 'react-native-qrcode-svg';
import { setCustomText } from 'react-native-global-props';
import * as Font from 'expo-font';

Font.loadAsync({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
})
function DetallesScreen({ route, navigation }) {
    /* Abilitys  Stats*/
    let idpokemon = route.params.id + 1;
    const [pokemons, setPokemonsInfo] = useState([]);
    var pokemons_array = [];
    async function pokemonsInfo() {
        const url = `https://pokeapi.co/api/v2/pokemon/${idpokemon}/`
        const response = await fetch(url)
        const data = await response.json()
        let jsonGenerator = { avatar_url: data.sprites.other.home.front_default, name: data.forms[0].name.toUpperCase(), subtitle: "", abilities: "", url: `${url}`, stats: "", weight: data.weight, height: data.height };
        for (let e = 0; e < data.abilities.length; e++) {
            jsonGenerator.abilities += data.abilities[e].ability.name.toUpperCase() + " ";
        }
        for (let r = 0; r < data.types.length; r++) {
            jsonGenerator.subtitle += data.types[r].type.name.toUpperCase() + " "
        }
        for (let t = 0; t < data.stats.length; t++) {
            jsonGenerator.stats += data.stats[t].stat.name.toUpperCase() + " " + data.stats[t].base_stat + '\n';
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
                            <Avatar size="xlarge"
                                title="CR"
                                activeOpacity={0.7} source={{ uri: l.avatar_url }} />
                            <ListItem.Content >
                                <ListItem.Title style={styles.title2}>{l.name}</ListItem.Title>
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
            <View>
                {pokemons.length == 0 ? <ActivityIndicator size="large" /> :
                    pokemons.map((l, index) => (
                        <ListItem key={index} containerStyle={{ backgroundColor: "rgba(189, 189, 189, 0.596);" }}>

                            <ListItem.Content >
                                <ListItem.Title style={styles.title}>Stats</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>{l.stats}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitle}>Witght: {l.weight}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitle}>Height: {l.height}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Content >

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
                            </ListItem.Content>
                            <ListItem.Content >
                                <ListItem.Title style={styles.title}>QR Code</ListItem.Title>
                                <QRCode value={l.url}></QRCode>
                            </ListItem.Content>
                            <ListItem.Content >
                            </ListItem.Content>
                        </ListItem>

                    ))
                }
            </View>
        </ScrollView>
    );
}

const customTextProps = {
    style: {
        fontFamily: 'Montserrat-Regular',
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',

    },

    title: {
        fontSize: 20,
        color: '#fff',
    },
    title2: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 30,
    },
    subtitle: {
        fontSize: 15,
        color: 'rgb(204, 70, 70)',
        fontWeight: 'bold',
    },
});
setCustomText(customTextProps);
export default DetallesScreen;