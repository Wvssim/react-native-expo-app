
import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const favorites = [
  { id: 3, title: "Inception" },
  { id: 4, title: "Interstellar" },
];

export default function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vos films favoris</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Button
              title="Voir"
              color="#1976d2"
              onPress={() => navigation.navigate("Details", { filmId: item.id })}
            />
          </View>
        )}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f6fa", paddingTop: 40 },
  title: { fontSize: 24, fontWeight: "bold", color: "#222", marginBottom: 20 },
  item: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff", padding: 12, marginVertical: 6, borderRadius: 8, width: 280, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  itemText: { fontSize: 16, color: "#333", flex: 1 },
});
