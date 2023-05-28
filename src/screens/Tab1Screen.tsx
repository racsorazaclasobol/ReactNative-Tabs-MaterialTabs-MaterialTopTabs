import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import { appTheme } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1 = () => {
    return (
        <View style={ appTheme.globalMargin }>
            <Text style={ appTheme.title }>Iconos</Text>

            <TouchableIcon iconName='airplane-outline' />
            <TouchableIcon iconName='alarm-outline' />
            <TouchableIcon iconName='arrow-back-circle' />
            <TouchableIcon iconName='bulb-outline' />
            <TouchableIcon iconName='chatbubbles-outline' />
        </View>
    )
}

