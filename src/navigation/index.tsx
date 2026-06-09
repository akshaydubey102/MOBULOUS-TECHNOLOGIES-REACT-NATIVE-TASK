
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InstagramProfileScreen from '../screens/InstagramProfileScreen';
import YouTubeFeedScreen from '../screens/YouTubeFeedScreen';

export type RootStackParamList = {
  Home: undefined;
  InstagramProfile: undefined;
  YouTubeFeed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TaskApp' }} />
        <Stack.Screen
          name="InstagramProfile"
          component={InstagramProfileScreen}
          options={{ title: 'Instagram Profile' }}
        />
        <Stack.Screen
          name="YouTubeFeed"
          component={YouTubeFeedScreen}
          options={{ title: 'YouTube Feed' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
