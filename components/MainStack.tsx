import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import SignIn from '../src/SignIn/index' ;


 
export default ()=>{
  const Stack = createStackNavigator();
  return(
    
    <Stack.Navigator
    initialRouteName='SignIn'
        screenOptions={{
            headerShown: false
        }}
    >
    <Stack.Screen name='SignIn' component={SignIn}/>
    </Stack.Navigator>
  )
}
