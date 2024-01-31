import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JugglingHead from "../screens/Animations/JugglingHead";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="JugglingHead">
      <Stack.Screen name={'JugglingHead'} component={JugglingHead} />
    </Stack.Navigator>
  );
};
