import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JugglingHead from "../screens/Animations/JugglingHead";
import { navigationConstants } from "../constants/NavigationConstant";
import Game from "../screens/Games/SnakeGame/Game";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Game">
      <Stack.Screen name={navigationConstants.JUGGLING_HEAD_ANIMATION} component={JugglingHead} />
      <Stack.Screen name={navigationConstants.SNAKE_GAME} component={Game} />
    </Stack.Navigator>
  );
};
