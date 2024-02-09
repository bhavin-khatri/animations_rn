import { Text, StyleSheet } from "react-native";
import { Colors } from "../../../res/styles/Colors";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";

interface ScoreProps {
  score: number;
}

export const Score=({ score }: ScoreProps)=> {
  return <Text style={styles.text}>🍎 {score}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: ResponsivePixels.size22,
    fontWeight: "bold",
    color: Colors.defaultWhite,
    textAlign:'right'
  },
});
