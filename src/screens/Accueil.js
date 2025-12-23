import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Accueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <Text style={styles.text}>
        Cliquez pour envoyer une couleur au Profil.
      </Text>
      <Button
        title="Envoyer une couleur"
        onPress={() =>
          navigation.navigate("Profil", {
            couleur: "blue",
            message: "Bonjour depuis Accueil !",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  text: { marginBottom: 20 },
});
