import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ActivityLog from './ActivityLog';
import CalorieTracker from './CalorieTracker';
import Dashboard from './Dashboard';
import GoalsAndAchievements from './GoalsAndAchievements';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ActivityLog" component={ActivityLog} />
        <Stack.Screen name="CalorieTracker" component={CalorieTracker} />
        <Stack.Screen name="GoalsAndAchievements" component={GoalsAndAchievements} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
