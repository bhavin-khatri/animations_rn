import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Colors } from "../../../res/styles/Colors";
import { Direction, Coordinate, GestureEventType } from "../../../utils/types";
import { checkEatsFood } from "../../../utils/checkEatsFood";
import { checkGameOver } from "../../../utils/checkGameOver";
import { randomFoodPosition } from "../../../utils/randomFoodPosition";
import Food from "./Food";
import Header from "./Header";
import { Score } from "./Score";
import Snake from "./Snake";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";
const { width, height } = Dimensions.get('window');
const SNAKE_INITIAL_POSITION = [{ x: 0.5, y: 0.5, }];
const FOOD_INITIAL_POSITION = { x: 0.5, y: 20 };
const GAME_BOUNDS = { xMin: 0.5, xMax: Math.floor(width / 5.35), yMin: 0.5, yMax: Math.floor(height / 5.85), };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 1;

const Game=()=>{
  const [direction, setDirection] = useState<Direction>(Direction.Right);
  const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
  const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POSITION);
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!isGameOver) {
      const intervalId = setInterval(() => {
        !isPaused && moveSnake();
      }, MOVE_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [snake, isGameOver, isPaused]);

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newHead = { ...snakeHead }; // create a new head object to avoid mutating the original head

    // GAME OVER
    if (checkGameOver(snakeHead, GAME_BOUNDS)) {
      setIsGameOver((prev) => !prev);
      return;
    }

    switch (direction) {
      case Direction.Up:
        newHead.y -= 1;
        break;
      case Direction.Down:
        newHead.y += 1;
        break;
      case Direction.Left:
        newHead.x -= 1;
        break;
      case Direction.Right:
        newHead.x += 1;
        break;
      default:
        break;
    }

    if (checkEatsFood(newHead, food, 2)) {
      setFood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
      setSnake([newHead, ...snake]);
      setScore(score + SCORE_INCREMENT);
    } else {
      setSnake([newHead, ...snake.slice(0, -1)]);
    }
  };

  const handleGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        setDirection(Direction.Right);
      } else {
        setDirection(Direction.Left);
      }
    } else {
      if (translationY > 0) {
        setDirection(Direction.Down);
      } else {
        setDirection(Direction.Up);
      }
    }
  };

  const reloadGame = () => {
    setSnake(SNAKE_INITIAL_POSITION);
    setFood(FOOD_INITIAL_POSITION);
    setIsGameOver(false);
    setScore(0);
    setDirection(Direction.Right);
    setIsPaused(false);
  };

  const pauseGame = () => {
    setIsPaused(!isPaused);
  };

  // console.log(JSON.stringify(snake, null, 0));

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={styles.container}>
        <Header
          reloadGame={reloadGame}
          pauseGame={pauseGame}
          isPaused={isPaused}
        >
          <Score score={score} />
        </Header>
        <View style={styles.boundaries}>
          <Snake snake={snake} />
          <Food x={food.x} y={food.y} />
        </View>
      </SafeAreaView>
    </PanGestureHandler>
  );
}

export default Game
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snakeBoard,
  },
  boundaries: {
    flex: 1,
    borderColor: Colors.defaultWhite,
    borderWidth: ResponsivePixels.size5,
    backgroundColor: Colors.snakeBoard,
  },
});
