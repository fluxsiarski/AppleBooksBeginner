import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { BookCover } from "./BookCover";
import { BookGenereBar } from "./BookGenereBar";
import { getRandomHexColor } from "./RandomBookCover";

export function BookGenereGroupHorizontal(props) {
  return (
    <View style={styles.bookGenereGroupContainer}>
      <View style={styles.module}>
        <BookGenereBar genereName={props.genereName} />

        {/* {genereNames.map((genereName, index) => (
          <BookGenereBar key={index} genereName={genereName} />
        ))} */}

        <View style={styles.bookShelf}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              gap: 20,
              paddingVertical: 4,
              paddingHorizontal: 30,
              // marginHorizontal: 30, totalnie zła opcja, powinienem był wybrać padding od razu
            }} // Wiem ze tak sie nie powinno i najlepiej wyeksportowac do styleSheet
          >
            {props.data.map((book, index) => {
              return (
                <BookCover
                  key={index}
                  name={book}
                  color={getRandomHexColor()}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View style={styles.bookCategoryDivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookGenereGroupContainer: {
    gap: 25,
  },

  bookShelf: {
    flexDirection: "row",
  },

  module: {
    gap: 20,
  },

  bookCategoryDivider: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.6,
    opacity: 0.6,
    marginHorizontal: 30,
  },
});

const titles = ["Crime", "Fairytail", "bajka", "nazwa"];
