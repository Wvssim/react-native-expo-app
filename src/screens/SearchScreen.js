
import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche</Text>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un film..."
        value={query}
        onChangeText={setQuery}
      />
      <Button
        title="Voir un résultat"
        color="#1976d2"
        onPress={() => navigation.navigate("Details", { filmId: 2 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f6fa" },
  title: { fontSize: 24, fontWeight: "bold", color: "#222", marginBottom: 20 },
  input: { width: 250, height: 40, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, marginBottom: 20, backgroundColor: "#fff" },
});
