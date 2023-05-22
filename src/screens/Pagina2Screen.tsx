import { useEffect } from 'react';
import { Button, Text, View } from 'react-native'

import { appTheme } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/core';

export const Pagina2Screen = () => {

	const navigator = useNavigation<any>();

	//Esto es solo para IOS, para que el volver, no muestre el texto
	useEffect(() => {
		
		navigator.setOptions({
			headerBackTitle: 'Atrás'
		})
		
	}, [])
	

    return (
		<View style={ appTheme.globalMargin }>
			<Text style={ appTheme.title } >Pagina 2</Text>

			<Button
			title="Ir página 3"
			onPress={ () => navigator.navigate('Pagina3Screen') }
			></Button>
		</View>
    )
}
