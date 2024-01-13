import { StyleSheet, Text, View } from "react-native";

export function UpperMenu() {
  return (
    <View style={[styles.upperMenuContainer, styles.line]}>
      <View style={styles.bar}>
        <View style={styles.otherCategory}>
          <Text style={styles.otherCategoriesFont}>{"< "}Reading Now</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryFont}>Free Books</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    marginTop: 50,
    flexDirection: "row",
  },

  upperMenuContainer: {
    position: "absolute",
    backgroundColor: "#e7e7e7",
    top: 0,
    left: 0,
    right: 0,
    height: 105,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 2,
  },

  line: {
    borderBottomWidth: 0.4,
    borderBottomColor: "grey",
  },

  category: {
    marginLeft: 8,
  },

  categoryFont: {
    fontSize: 20,
    fontWeight: "800",
  },

  otherCategory: {
    marginLeft: 20,
  },

  otherCategoriesFont: {
    fontSize: 20,
  },
});
