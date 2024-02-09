import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../res/styles/Colors";
import { Coordinate } from "../../../utils/types";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";

interface SnakeProps {
  snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
  return (
    <Fragment>
      {snake.map((segment: any, index: number) => {
        // console.log("snake ==== > ",snake);
        const segmentStyle = {
          left: segment.x * 5, // adjust for the size of each segment
          top: segment.y * 5,
          width: ResponsivePixels.size15,
          height:  ResponsivePixels.size15, // default height
        };
        if (index === 0) { // Check the direction based on the head of the snake
          const nextSegment = snake[1];
          if (nextSegment) { // Ensure there is a next segment
            if (nextSegment.x !== segment.x) {
              // Snake is moving along the x-axis
              segmentStyle.width =  ResponsivePixels.size30;
              segmentStyle.height =  ResponsivePixels.size15;
            } else if (nextSegment.y !== segment.y) {
              // Snake is moving along the y-axis
              segmentStyle.width =  ResponsivePixels.size15;
              segmentStyle.height =  ResponsivePixels.size30;
            }
          }
        }
        return (
          <>
            <View key={index} style={[styles.snake, segmentStyle]}>
            </View>
          </>);
      })}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  snake: {
    width: ResponsivePixels.size30,
    height: ResponsivePixels.size10,
    borderRadius: ResponsivePixels.size30,
    backgroundColor: Colors.highlightNavyBlue,
    position: "absolute",
  },
});
