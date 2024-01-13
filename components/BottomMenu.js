import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BottomMenuIcon } from "./BottomMenuIcon";

export function BottomMenu(props) {
  return (
    <View style={[styles.bottomMenuContainer, styles.line]}>
      <View style={styles.iconsGroup}>
        {props.icons.map((icon, index) => {
          return <BottomMenuIcon key={index} name={icon} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMenuContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#f7f7f7",
    height: 100,
  },

  iconsGroup: {
    flexDirection: "row",
    marginVertical: 7,
    marginHorizontal: 8,
  },

  line: {
    borderTopWidth: 0.2,
    borderTopColor: "grey",
  },
});
