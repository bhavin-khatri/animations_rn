import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../res/styles/Colors";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";
import Images from "../../../res/styles/Images";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  children: JSX.Element;
  isPaused: boolean;
}

export default function Header({
  children,
  reloadGame,
  pauseGame,
  isPaused,
}: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame} style={styles.iconStyle}>
        <Image source={Images.ic_restart} style={styles.smallIcon}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={pauseGame} style={styles.iconStyle}>
        <Image source={isPaused ? Images.ic_play : Images.ic_pause} style={styles.smallIcon}/>
      </TouchableOpacity>
      <View>
        {children}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.defaultWhite,
    borderWidth: ResponsivePixels.size5,
    borderBottomWidth: 0,
    padding: ResponsivePixels.size15,
    backgroundColor: Colors.snakeBoard,
  },
  smallIcon:{
    height:ResponsivePixels.size20,
    width:ResponsivePixels.size20,
    tintColor:Colors.defaultWhite
  },
  iconStyle:{
      flex:1,
  }
});
