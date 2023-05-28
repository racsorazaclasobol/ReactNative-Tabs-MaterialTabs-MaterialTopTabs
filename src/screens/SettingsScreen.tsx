import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appTheme } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingScreen = () => {

    const insets = useSafeAreaInsets();
    const { authState } = useContext( AuthContext );
    const { favoriteIcon } = authState;

    return (
        <View 
            style={{ 
                ...appTheme.globalMargin,
                marginTop: insets.top + 20
            }}
        >
            <Text>SettingScreen</Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

            { favoriteIcon && <Icon name={ favoriteIcon } size={50}  color="tomato" />}
        </View>
    )
}

const styles = StyleSheet.create({
     
});