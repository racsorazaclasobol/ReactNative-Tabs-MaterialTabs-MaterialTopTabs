import React from 'react';
import { Text, Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { TopTabs } from './TopTabs';
import { Tab1 } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';


export const Tabs = () => {

	return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid /> 
}


const ButtonsTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
	return (
		<ButtonsTabAndroid.Navigator
			activeColor='white'
			inactiveColor='black'
			sceneAnimationEnabled={ true }
			barStyle={{
				backgroundColor: colores.primary,
			}}
			screenOptions={ ({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: colores.primary,
				tabBarStyle:{
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 150,
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

					return <Icon name={ IconToShow } size={25} color="white" />

				}

			})}
		>
			<ButtonsTabAndroid.Screen name="Tab1" options={{ title: 'Tab 1' }} component={ Tab1 } />
			<ButtonsTabAndroid.Screen name="Tab2" options={{ title: 'Tab 2' }} component={ TopTabs } />
			<ButtonsTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack Navigator' }}  component={ StackNavigator } />
		</ButtonsTabAndroid.Navigator>
	);
}




const ButtonsTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
	return (
		<ButtonsTabIOS.Navigator 
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			screenOptions={ ({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: colores.primary,
				tabBarStyle:{
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle:{
					fontSize: 15,
					fontWeight: 'bold'
				},
				tabBarIcon: ({ color, focused, size }) => {
					
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

					return <Icon name={ IconToShow } size={25} color="white" />
				}

			})}
		>
		{/* <Tab.Screen name="Tab1" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }} >Tab1</Text> }} component={ Tab1 } /> */}
			<ButtonsTabIOS.Screen name="Tab1" options={{ title: 'Tab 1' }} component={ Tab1 } />
			<ButtonsTabIOS.Screen name="Tab2" options={{ title: 'Tab 2' }} component={ TopTabs } />
			<ButtonsTabIOS.Screen name="StackNavigator" options={{ title: 'Stack Navigator' }}  component={ StackNavigator } />
		</ButtonsTabIOS.Navigator>
	);
}