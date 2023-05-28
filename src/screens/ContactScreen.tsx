import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { appTheme } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

    const { authState, signIn } = useContext( AuthContext );

    return (
        <View style={ appTheme.globalMargin }>
            <Text style={ appTheme.title }>
                ContactScreen  
            </Text>

            { !authState.isLogginIn && <Button title='Iniciar Sesion' onPress={ () => signIn('no-name-user') } />}
        </View>
    )
}

const styles = StyleSheet.create({
     
});