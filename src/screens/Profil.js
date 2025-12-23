import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profil({ route }) {
  const message = route?.params?.message;
  const couleur = route?.params?.couleur || "black";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      {message && (
        <Text style={[styles.msg, { color: couleur }]}>
          Message reçu : {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  msg: { marginTop: 10, fontSize: 16 },
});
