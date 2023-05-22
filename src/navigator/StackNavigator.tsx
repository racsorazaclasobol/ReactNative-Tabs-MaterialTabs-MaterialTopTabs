import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id: number, name: string },
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    return (

        <Stack.Navigator
            // initialRouteName='' Indica en que screen inicia el proyecto
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title: 'Pagina 1' }} component={ Pagina1Screen } />
            <Stack.Screen name="Pagina2Screen" options={{ title: 'Pagina 2' }} component={ Pagina2Screen } />
            <Stack.Screen name="Pagina3Screen" options={{ title: 'Pagina 3' }} component={ Pagina3Screen } />
            <Stack.Screen name="PersonaScreen" component={ PersonaScreen } />
        </Stack.Navigator>

    )
}
