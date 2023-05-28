import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

export const TouchableIcon = ({ iconName }: { iconName: string }) => {

    const { changeFavoriteAction } = useContext( AuthContext )

    return (
        <TouchableOpacity
            onPress={ () => changeFavoriteAction( iconName ) }    
        >
            <Icon 
                name={ iconName }
                size={50} 
                color="tomato" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
     
});