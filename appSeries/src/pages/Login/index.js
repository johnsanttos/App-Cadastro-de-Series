import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Login() {
    const route = useRoute() // passar parametros pela navegação
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina Sobre' : route.params.nome
        }) // passar parametros pela navegação
    }, [navigation])
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text> Pagina Sobre</Text>
            <Text>{route.params?.nome} </Text>
            <Text>{route.params?.email} </Text>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text> Voltar </Text>
            </TouchableOpacity>
        </View>
    );
}