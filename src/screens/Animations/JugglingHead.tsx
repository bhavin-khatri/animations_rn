import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, ImageBackground, StatusBar, StyleSheet } from "react-native";
import Images from "../../res/styles/Images";
import { ResponsivePixels } from "../../res/styles/ResponsivePixels";

const JugglingHead = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startAnimation();
  }, []);
  const startAnimation = () => {
    Animated.loop(
    Animated.sequence([
      // Phase 1: Move up
      Animated.timing(translateY, {
        toValue: -250, // Adjust as needed
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      // Phase 3: Move down
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ])).start();
    Animated.loop(
        Animated.timing(rotate, {
          toValue: 1,
          duration: 1000, // Duration for one full rotation
          easing: Easing.linear,
          useNativeDriver: true,
        })
    ).start();
  };

  const eclipseTransformStyle = {
    transform: [
      { translateY: translateY },
      {
        rotate: rotate.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <>
      <StatusBar hidden/>
    <ImageBackground source={Images.ic_football_ground} style={styles.container}>
      <Animated.View
          style={[
            eclipseTransformStyle,
            styles.footballMain
          ]}>
        <Image source={Images.ic_football} style={styles.tennisImage} />
      </Animated.View>

      <Image source={Images.ic_ronaldo} style={styles.ronaldoImage} />
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footballMain:{
    // position:'absolute',
    zIndex:1,
    left:40,
    top:50,
    // backgroundColor:'red',
  },
  ronaldoImage: {
    width: ResponsivePixels.size350,
    height: ResponsivePixels.size450,
  },
  tennisImage: {
    width: 150,
    height: 150,
  },
});

export default JugglingHead;
