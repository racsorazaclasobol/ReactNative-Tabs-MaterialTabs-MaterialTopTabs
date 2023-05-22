import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawNavigator = () => {

    const { width } = useWindowDimensions();
    console.log(width)

  return (
    <Drawer.Navigator
        screenOptions={{ drawerType: (width >= 718) ? 'permanent' : 'front' }}
    >


      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator } />
      <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={ SettingScreen } />
    </Drawer.Navigator>
  );
}

export default DrawNavigator;