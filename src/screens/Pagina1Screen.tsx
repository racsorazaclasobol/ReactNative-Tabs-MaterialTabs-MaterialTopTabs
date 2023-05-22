import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { appTheme } from '../theme/appTheme'

//Hacerlo de esta forma es mas eficiente que usando el useNavigation que uso en la Pagina2Screen
interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    return (
		<View style={ appTheme.globalMargin }>
			<Text style={ appTheme.title } >Pagina 1</Text>

			<Button
				title="Ir página 2"
				onPress={ () => navigation.navigate('Pagina2Screen') }
			></Button>

			<Text style={{ marginVertical: 15 }}>Navegar con Argumentos</Text>

			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={{
						...appTheme.botonGrande,
					}}
					onPress={ () => navigation.navigate('PersonaScreen', {
						id: 1,
						name: 'Pedro'
					}) }
				>
					<Text
						style={ appTheme.textoBoton }	
					>Pedro</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						...appTheme.botonGrande,
						backgroundColor: 'orange',
						marginLeft: 15
					}}
					onPress={ () => navigation.navigate('PersonaScreen', {
						id: 2,
						name: 'Maria'
					}) }
				>
					<Text
						style={ appTheme.textoBoton }	
					>Maria</Text>
				</TouchableOpacity>
			</View>

		</View>
	)
}
