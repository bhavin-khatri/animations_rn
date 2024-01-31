/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { navigationRef } from "./src/navigation/Navigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./src/navigation/AppStack";


function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider>

          <NavigationContainer
            ref={navigationRef}>
            <AppStack />
          </NavigationContainer>

      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}

export default App;
