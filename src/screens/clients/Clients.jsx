import { StyleSheet, Text } from "react-native";

export const Clients = () => {
  return <Text style={styles.container}>Clientes</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    minHeight: 1200,
    minWidth: 800,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
