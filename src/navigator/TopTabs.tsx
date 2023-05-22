import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {

	const { top: paddingTop } = useSafeAreaInsets();


	return (
		<Tab.Navigator
			style={{ paddingTop }}
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			screenOptions={ ({ route }) => ({
				tabBarPressColor: 'tomato',
				tabBarShowIcon: true,
				tabBarIndicatorStyle: { backgroundColor: 'tomato' },
				tabBarStyle:{
					shadowColor: 'transparent',
					elevation: 0
				},
				tabBarIcon: ({ color, focused }) => {
					
					let IconToShow: string;

					switch( route.name ) {
						case 'Tab1': 
							IconToShow = 'airplane-outline'
							break;
						case 'Tab2': 
							IconToShow = 'alarm-outline'
							break;
						case 'StackNavigator': 
							IconToShow = 'bulb-outline'
							break;
						default:
							IconToShow = 'airplane-outline'

					}

					return <Icon name={ IconToShow } size={25} color={ color } />
				}
			})}
		>
		<Tab.Screen name="Chat" component={ ChatScreen } />
		<Tab.Screen name="Contact" component={ ContactScreen } />
		<Tab.Screen name="Album" component={ AlbumScreen } />
		</Tab.Navigator>
	);
}