import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Login({ onLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.subtitle}>Veuillez vous connecter.</Text>
      <Button title="Se connecter" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
});
