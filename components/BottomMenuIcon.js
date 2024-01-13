import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export function BottomMenuIcon(props) {
  return (
    <View style={styles.bottomMenuIconContainer}>
      <View style={styles.icon}>
        <View style={styles.iconPicture} />
        <Text style={styles.iconFont}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMenuIconContainer: {
    flex: 1,
  },

  icon: {
    alignItems: "center",
    gap: 4,
    // marginTop:20
  },

  iconPicture: {
    width: 32,
    height: 32,
    backgroundColor: "#a1a1a1",
    borderRadius: 8,
  },

  iconFont: {
    fontSize: 13,
  },
});
