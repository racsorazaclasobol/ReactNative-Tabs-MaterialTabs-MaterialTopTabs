import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { appTheme } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ( { navigation }: Props ) => {

	
	return (
		<View style={ appTheme.globalMargin }>
			<Text style={ appTheme.title }>Pagina 3</Text>
	
			<Button
			  title="Regresar"
			  onPress={ () => navigation.pop() } />

			<Button
			  title="Ir página 1"
			  onPress={ () => navigation.popToTop() } />
		</View>
	)
}
