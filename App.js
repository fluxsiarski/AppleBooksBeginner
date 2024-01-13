import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { BookCover } from "./components/BookCover";
import { BookGenereBar } from "./components/BookGenereBar";
import { UpperMenu } from "./components/UpperMenu";
import { BottomMenu } from "./components/BottomMenu";
import { BottomMenuIcon } from "./components/BottomMenuIcon";
import { BookGenereGroupHorizontal } from "./components/BookGenereGroup";

// # PROBLEMY

// 1#
// Jak wyrównać ksiązki aby BookGenereGroupHorizontal nie wchodzil na UpperMenu i BottomMenu?
// Poniewaz upperMenu jakoś wyrównałem ale sztucznie

// # Rozwiązałem to dodająć paddingBottoom / Top do scrollowalnego elementu.

// 2#
// Czemu scrollView in BookGenereGroupHorizontal ucięło mi BookCover?
// Po zabraniu scrollView w pliku BookGenereGroupHorizontal widać dół ksiąki i rzucany cień.

// # Rozwiązałem to dodając paddingVertical: 4, w <View bookShlef> scrollView

// 3#
// Jak przekazać propsy do BookGenereBar aby zmieniało się nazwa gatunku?
// Próbowałem podawać i robi się dziwna rzecz ze ten BookGenereBar generuje się w pionie tyle razy ile rzeczy w tablicy

// # Rozwiązałem to zamiast robić mapa po tablicy nazw ksiązek, to zrobilem map
// po nazwach gatunków a tablice nazw ksiazek podalem jako inny props

// Nie wiem czy nie rozwiązałem tego sztucznie?

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UpperMenu />

      <View style={styles.categories}>
        <ScrollView contentContainerStyle={styles.scrolView}>
          {bookGenres.map((genre, index) => (
            <BookGenereGroupHorizontal
              key={index}
              genereName={genre}
              data={popularCriminalBooks}
            />
          ))}
        </ScrollView>
      </View>

      <BottomMenu
        icons={[
          "Reading Now",
          "Library",
          "Books Store",
          "Audiobooks",
          "Search",
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // gap: 65,
  },

  categories: {
    gap: 20,
    flex: 1,
  },

  scrolView: {
    gap: 20,
    paddingBottom: 70,
    paddingTop: 70,
  },
});

const bookGenres = [
  "Mystery",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Thriller",
  "Horror",
  "Adventure",
  "Historical Fiction",
  "Biography",
  "Autobiography",
  "Non-Fiction",
  "Young Adult",
  "Children's",
  "Self-Help",
  "Classic",
  "Crime",
  "Drama",
  "Poetry",
  "Comedy",
  "Science",
  "Travel",
  "Cooking",
  "Art",
  "Business",
];

const popularFairyTales = [
  "Cinderella",
  "Snow White and the Seven Dwarfs",
  "Beauty and the Beast",
  "Little Red Riding Hood",
  "The Sleeping Beauty",
  "Hansel and Gretel",
  "Rumpelstiltskin",
  "The Little Mermaid",
  "Aladdin and the Magic Lamp",
  "The Three Little Pigs",
  "Jack and the Beanstalk",
  "Puss in Boots",
  "The Ugly Duckling",
  "The Princess and the Frog",
  "Peter Pan",
];

const popularCriminalBooks = [
  "In Cold Blood by Truman Capote",
  "The Silence of the Lambs by Thomas Harris",
  "Gone Girl by Gillian Flynn",
  "The Girl with the Dragon Tattoo by Stieg Larsson",
  "Mystic River by Dennis Lehane",
  "The Da Vinci Code by Dan Brown",
  "The Godfather by Mario Puzo",
  "The Girl on the Train by Paula Hawkins",
  "The Reversal by Michael Connelly",
  "The Snowman by Jo Nesbø",
  "The Alienist by Caleb Carr",
  "The Silence of Murder by Dandi Daley Mackall",
  "The Secret History by Donna Tartt",
  "The Talented Mr. Ripley by Patricia Highsmith",
  "Before I Go to Sleep by S.J. Watson",
];
