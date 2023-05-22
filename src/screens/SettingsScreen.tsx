import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appTheme } from '../theme/appTheme';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <View 
            style={{ 
                ...appTheme.globalMargin,
                marginTop: insets.top + 20
            }}
        >
            <Text>SettingScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     
});