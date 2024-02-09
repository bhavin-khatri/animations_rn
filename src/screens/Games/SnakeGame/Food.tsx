import { StyleSheet, Text, View } from "react-native";
import { Coordinate } from "../../../utils/types";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";
import { Colors } from "../../../res/styles/Colors";
function getRandomFruitEmoji() {
  const fruitEmojis = ["🍎", "🍊", "🍋", "🍇", "🍉", "🍓", "🍑", "🍍"];
  const randomIndex = Math.floor(Math.random() * fruitEmojis.length);
  return fruitEmojis[randomIndex];
}

export default function Food({ x, y }: Coordinate): JSX.Element {
  return <View style={[{ top: y * 5, left: x * 5 }, styles.food]}/>;
}

const styles = StyleSheet.create({
  food: {
    height:ResponsivePixels.size15,
    width:ResponsivePixels.size15,
    fontSize:ResponsivePixels.size18,
    borderRadius: ResponsivePixels.size9,
    fontWeight: "bold",
    backgroundColor: Colors.defaultWhite,
    position: "absolute",
  },
});
