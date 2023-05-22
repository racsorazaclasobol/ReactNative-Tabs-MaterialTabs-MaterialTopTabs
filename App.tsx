
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import DrawNavigatorPersonalizado from './src/navigator/DrawNavigatorPersonalizado';
import { Tabs } from './src/navigator/Tabs';
import { DefaulPaperTheme } from './src/theme/appTheme';
// import DrawNavigator from './src/navigator/DrawNavigator';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
	return (
		<PaperProvider theme={ DefaulPaperTheme }>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				{/* <DrawNavigator /> */}
				<DrawNavigatorPersonalizado />
				{/* <Tabs /> */}
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;