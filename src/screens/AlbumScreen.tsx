import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const AlbumScreen = () => {

    const { signOut, authState } = useContext( AuthContext );
    const { isLogginIn } = authState;

    return (
        <View>
            <Text>
                AlbumScreen
            </Text>

            { isLogginIn && <Button title='Cerrar Sesion' onPress={ signOut } /> }
        </View>
    )
}

const styles = StyleSheet.create({
     
});