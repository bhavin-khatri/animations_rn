import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PanResponder } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const INITIAL_SNAKE = [{ x: 0, y: 0 }]; // Initial snake position
const INITIAL_FOOD = { x: 10, y: 10 }; // Initial food position
const INTERVAL_TIME = 200; // Interval time for game loop

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const handleGesture =(event:any)=>{

  }
  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      {/* Render the game area, snake, food, and score */}
      <View style={styles.gameArea}>
        {/* Render snake */}
        {snake.map((segment, index) => (
          <View
            key={index}
            style={[
              styles.snakeSegment,
              { left: segment.x * 10, top: segment.y * 10 },
            ]}
          />
        ))}

        {/* Render food */}
        <View
          style={[
            styles.food,
            { left: food.x * 10, top: food.y * 10 },
          ]}
        />
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gameArea: {
    position: 'relative',
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
  },
  snakeSegment: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'green',
  },
  food: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'red',
  },
});

export default SnakeGame;
