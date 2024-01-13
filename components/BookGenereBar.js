import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export function BookGenereBar(props) {
  return (
    <View style={styles.bookGenereContainer}>
      <View style={styles.bookGenere}>
        <Text style={styles.bookGenereFont}>{props.genereName}</Text>
      </View>

      <View style={styles.seeAll}>
        <Text style={styles.seeAllFont}>See All {">"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookGenereContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bookGenere: {
    marginLeft: 40,
  },

  seeAll: {
    marginRight: 40,
  },

  bookGenereFont: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  seeAllFont: {
    fontSize: 20,
  },
});
