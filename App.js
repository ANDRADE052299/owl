/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  View,
  SafeAreaView,
  Text} from 'react-native'
import MainStack from "./navigation/MainStack";

const App = () => {
  return(
    <SafeAreaView>
      <MainStack/>
    </SafeAreaView>
  );

}

export default App() 