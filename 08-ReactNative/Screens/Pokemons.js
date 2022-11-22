import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { setCustomText } from 'react-native-global-props';

import * as Font from 'expo-font';
Font.loadAsync({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
})

function PokemonsScreen({ navigation }) {
    const [pokemons, setPokemons] = useState([]);
    var pokemons_array = [];
    async function pokemonsPritn() {
        for (let j = 1; j <= 15; j++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${j}/`
            const response = await fetch(url)
            const data = await response.json()
            let numberAbility = data.types.length - 1;
            let jsonGenerator = { avatar_url: data.sprites.front_default, name: data.forms[0].name.toUpperCase(), subtitle: data.types[0].type.name + " +" + numberAbility };
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
                            navigation.navigate('Detalles', { id: index,name:l.name });
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
                                <Text style={styles.number}>{`#${index + 1}`}</Text>
                            </ListItem>
                        </TouchableOpacity>
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
});
setCustomText(customTextProps);
export default PokemonsScreen;