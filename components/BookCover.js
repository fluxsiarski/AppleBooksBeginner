import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getRandomHexColor } from "./RandomBookCover";

// const randomColor = getRandomHexColor();
export function BookCover(props) {
  return (
    <View style={[styles.bookCoverContainer, { backgroundColor: props.color }]}>
      <Text style={styles.bookNameFont}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bookCoverContainer: {
    // flex: 1,
    width: 100,
    height: 155,
    // backgroundColor: randomColor,
    padding: 10,
    alignItems: "center",

    // Add shadow properties for iOS and elevation for Android
    shadowColor: "#000", // iOS
    shadowOffset: {
      width: 1,
      height: 4, // 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 4, // 3.84
    elevation: 5, // Android
  },

  bookNameFont: {
    fontSize: 15,
    marginTop: 16,
  },
});
