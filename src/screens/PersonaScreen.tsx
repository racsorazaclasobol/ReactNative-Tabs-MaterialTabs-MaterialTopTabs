import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { appTheme } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { navigation, route }: Props ) => {

    const { signIn } = useContext( AuthContext );
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        })
    }, []);

    useEffect( () => {
        if( !params.name ) return;
        signIn( params.name );
    }, [])
    

    return (
        <View style={ appTheme.globalMargin }>
            <Text style={ appTheme.title }>
                {
                    JSON.stringify( params, null, 4 )
                }
            </Text>
        </View>
    )
}
