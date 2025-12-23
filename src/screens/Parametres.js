
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Parametres() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <Text style={styles.text}>Page de configuration de l'application.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f6fa" },
  title: { fontSize: 24, fontWeight: "bold", color: "#1976d2", marginBottom: 20 },
  text: { fontSize: 16, color: "#333" },
});
