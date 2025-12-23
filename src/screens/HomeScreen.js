


import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Platform, Pressable, ActivityIndicator } from "react-native";

const popularMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    desc: "Un voleur s'infiltre dans les rêves pour voler des secrets."
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    desc: "Des astronautes voyagent à travers un trou de ver à la recherche d'un nouveau foyer pour l'humanité."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    desc: "Batman affronte le Joker dans une lutte pour Gotham."
  },
  {
    id: 4,
    title: "Dune",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w200/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    desc: "Un jeune homme doit voyager sur la planète la plus dangereuse de l'univers pour assurer l'avenir de sa famille."
  },
  {
    id: 5,
    title: "Avatar",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w200/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    desc: "Un marine paraplégique est envoyé sur Pandora, une planète extraterrestre."
  },
];

export default function HomeScreen({ navigation }) {
  // Simuler un chargement (squelette)
  const [loading, setLoading] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Pagination/voir plus
  const moviesToShow = showAll ? popularMovies : popularMovies.slice(0, 3);

  return (
    <ScrollView style={{ backgroundColor: '#f5f6fa', minHeight: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.bgGradient} />
      <View style={styles.header}>
        <Image source={{uri: 'https://img.icons8.com/color/96/movie-projector.png'}} style={styles.logo} />
        <Text style={styles.title}>Bienvenue sur <Text style={{color:'#1976d2'}}>MovieApp</Text></Text>
        <Text style={styles.subtitle}>Découvrez, recherchez et sauvegardez vos films préférés !</Text>
      </View>
      <View style={styles.sectionWrap}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Films populaires</Text>
          {loading ? (
            <View style={styles.skeletonRow}>
              {[1,2,3].map(i => (
                <View key={i} style={styles.skeletonCard} />
              ))}
            </View>
          ) : (
            <FlatList
              data={moviesToShow}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardsRow}
              renderItem={({ item }) => (
                <Pressable
                  style={({ hovered, pressed }) => [
                    styles.card,
                    (hovered || pressed) && Platform.OS === 'web' ? styles.cardHover : null
                  ]}
                  onPress={() => navigation.navigate("Details", { filmId: item.id })}
                >
                  <Image source={{uri: item.poster}} style={styles.poster} />
                  <Text style={styles.movieTitle}>{item.title} <Text style={styles.year}>({item.year})</Text></Text>
                  <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
                </Pressable>
              )}
            />
          )}
          {!showAll && !loading && (
            <TouchableOpacity style={styles.seeMoreBtn} onPress={() => setShowAll(true)}>
              <Text style={styles.seeMoreText}>Voir plus</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 320,
    backgroundColor: '#f5f6fa',
    zIndex: -1,
    // Optionnel : dégradé simple
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    shadowColor: '#1976d2',
    shadowOpacity: 0.04,
    shadowRadius: 24,
    elevation: 2,
  },
  header: { alignItems: "center", paddingTop: 40, paddingBottom: 20 },
  logo: { width: 90, height: 90, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#222", marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20, textAlign: "center", maxWidth: 420 },
  sectionWrap: { alignItems: 'center', width: '100%' },
  section: { maxWidth: 900, width: '100%', alignItems: 'center', paddingBottom: 40 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#1976d2", marginBottom: 18, alignSelf: 'flex-start', marginLeft: 8 },
  cardsRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' },
  card: { backgroundColor: "#fff", borderRadius: 12, marginRight: 18, padding: 14, width: 190, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 4, elevation: 2, transitionDuration: '200ms', transitionProperty: 'box-shadow,transform', transitionTimingFunction: 'ease' },
  cardHover: { transform: [{ scale: 1.04 }], shadowOpacity: 0.18, shadowRadius: 12, elevation: 6, zIndex: 2 },
  poster: { width: 120, height: 170, borderRadius: 8, marginBottom: 10, backgroundColor: '#eaeaea' },
  movieTitle: { fontSize: 16, fontWeight: "bold", color: "#222", textAlign: "center" },
  year: { fontSize: 13, color: "#888" },
  desc: { fontSize: 13, color: "#555", textAlign: "center", marginTop: 4 },
  seeMoreBtn: { marginTop: 18, backgroundColor: '#1976d2', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 8 },
  seeMoreText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  skeletonRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' },
  skeletonCard: { width: 190, height: 250, borderRadius: 12, backgroundColor: '#eaeaea', marginRight: 18 },
});
