

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MOVIES = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w300/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    desc: "Un voleur s'infiltre dans les rêves pour voler des secrets.",
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: "Science-fiction, Action, Thriller"
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    desc: "Des astronautes voyagent à travers un trou de ver à la recherche d'un nouveau foyer pour l'humanité.",
    director: "Christopher Nolan",
    duration: "2h 49min",
    genre: "Science-fiction, Drame, Aventure"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    desc: "Batman affronte le Joker dans une lutte pour Gotham.",
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: "Action, Crime, Drame"
  },
];

export default function DetailsScreen({ route, navigation }) {
  const { filmId } = route.params || {};
  const movie = MOVIES.find(m => m.id === filmId);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Film introuvable</Text>
        <Text style={styles.desc}>Aucun détail disponible pour cet identifiant.</Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>Retour</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: movie.poster}} style={styles.poster} />
      <Text style={styles.title}>{movie.title} <Text style={styles.year}>({movie.year})</Text></Text>
      <Text style={styles.genre}>{movie.genre}</Text>
      <Text style={styles.desc}>{movie.desc}</Text>
      <Text style={styles.info}>Réalisateur : <Text style={styles.infoValue}>{movie.director}</Text></Text>
      <Text style={styles.info}>Durée : <Text style={styles.infoValue}>{movie.duration}</Text></Text>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#f5f6fa", paddingTop: 40 },
  poster: { width: 180, height: 260, borderRadius: 12, marginBottom: 18, shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 4, elevation: 2 },
  title: { fontSize: 26, fontWeight: "bold", color: "#1976d2", marginBottom: 6, textAlign: "center" },
  year: { fontSize: 18, color: "#888" },
  genre: { fontSize: 15, color: "#555", marginBottom: 10, fontStyle: "italic" },
  desc: { fontSize: 16, color: "#333", marginBottom: 14, textAlign: "center", maxWidth: 320 },
  info: { fontSize: 15, color: "#222", marginBottom: 2 },
  infoValue: { fontWeight: "bold", color: "#1976d2" },
  backBtn: { marginTop: 24, backgroundColor: "#1976d2", paddingHorizontal: 28, paddingVertical: 10, borderRadius: 8 },
  backBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
