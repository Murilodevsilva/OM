import React from 'react';
import MainStack from './components/MainStack';
import {NavigationContainer} from '@react-navigation/native';

import { View } from 'react-native';

export default ()=> {
  return(
    <NavigationContainer>
    <MainStack/>
    </NavigationContainer>

  
  )
};