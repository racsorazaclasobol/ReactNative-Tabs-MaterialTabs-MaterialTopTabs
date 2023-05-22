import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';

import { SettingScreen } from '../screens/SettingsScreen';
import { appTheme } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

const DrawNavigatorPersonalizado = () => {

    const { width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{ drawerType: (width >= 718) ? 'permanent' : 'front' }}
			drawerContent={ (props) => <DrawerContent { ...props } /> }
		>
		<Drawer.Screen name="Tabs" component={ Tabs } />
		<Drawer.Screen name="Settings" component={ SettingScreen } />
		</Drawer.Navigator>
	);
}

const DrawerContent = ( { navigation }: DrawerContentComponentProps ) => {

	return (
		<DrawerContentScrollView>

			{/* Imagen Avatar */}
			<View style={ appTheme.avatarContainer } >
				<Image 
					source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }} 
					style={ appTheme.avatar }	
				/>
			</View>

			{/* Opciones de Menú */}
			<View style={ appTheme.menuContainer } >

				<TouchableOpacity 
					style={{
						...appTheme.menuButton,
						flexDirection: 'row',
						gap: 10
					}}
					onPress={ () => navigation.navigate('Tabs') }
				>

					<Icon name="chatbubbles-outline" size={25} color="tomato" />
					<Text style={ appTheme.menuText }>
						   Navegacion Stack
					</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={{
						...appTheme.menuButton,
						flexDirection: 'row',
						gap: 10
					}}
					onPress={ () => navigation.navigate('Settings') }
				>
					<Icon name="bulb-outline" size={25} color="tomato" />
					<Text style={ appTheme.menuText }>
						Ajustes
					</Text>
				</TouchableOpacity>

			</View>			

		</DrawerContentScrollView>
	)
}

export default DrawNavigatorPersonalizado;