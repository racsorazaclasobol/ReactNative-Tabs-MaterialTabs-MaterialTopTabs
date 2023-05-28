
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import DrawNavigatorPersonalizado from './src/navigator/DrawNavigatorPersonalizado';
import { Tabs } from './src/navigator/Tabs';
import { DefaulPaperTheme } from './src/theme/appTheme';
import { AuthProvider } from './src/context/AuthContext';
// import DrawNavigator from './src/navigator/DrawNavigator';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
	return (
		<PaperProvider theme={ DefaulPaperTheme }>
			<NavigationContainer>
				<AuthProvider>
					{/* <StackNavigator /> */}
					{/* <DrawNavigator /> */}
					<DrawNavigatorPersonalizado />
					{/* <Tabs /> */}
				</AuthProvider>
			</NavigationContainer>
		</PaperProvider>
	);
};



export default App;