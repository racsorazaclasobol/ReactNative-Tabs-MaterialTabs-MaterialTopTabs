import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import { appTheme } from '../theme/appTheme';

export const Tab1 = () => {
    return (
        <View style={ appTheme.globalMargin }>
            <Text style={ appTheme.title }>Iconos</Text>

            <Icon name="airplane-outline" size={50} color="tomato" />
            <Icon name="alarm-outline" size={50} color="tomato" />
            <Icon name="arrow-back-circle-outline" size={50} color="tomato" />
            <Icon name="bulb-outline" size={50} color="tomato" />
            <Icon name="chatbubbles-outline" size={50} color="tomato" />
        </View>
    )
}

