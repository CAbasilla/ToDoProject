import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/homeScreen';
import { AddTodoScreen } from '../screens/addTodoScreen';
import { EditTodoScreen } from '../screens/editTodoScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#663399' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Mission Imposible',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}
      />
      <Stack.Screen
        name="Add"
        component={AddTodoScreen}
        options={{
          headerBackVisible: true,
          title: 'Add To Do',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}
      />
      <Stack.Screen
        name="Edit"
        component={EditTodoScreen}
        options={{
          headerBackVisible: true,
          title: 'Edit To Do',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}
      />
    </Stack.Navigator>
  );
}
const MainNavigation = () => {
  return(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
  );
};

export { MainNavigation };
