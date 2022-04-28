import { StyleSheet, View } from "react-native";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Prods } from "../src/screens/prods/Prods";
import { Sales } from "../src/screens/sales/Sales";
import { Config } from "../src/screens/config/Config";
import { Clients } from "../src/screens/clients/Clients";
import "./styles.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <View style={styles.navBar}>
          <View style={styles.item}>
            <Link to="/">Produtos</Link>
          </View>
          <Link to="/sales">Vendas</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/settings">Configuração</Link>
        </View>
        <Routes>
          <Route path="/" element={<Prods />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/settings" element={<Config />} />
        </Routes>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white",
    padding: 20,
    marginBottom: 1,
    fontSize: 25,
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 50,
    paddingEnd: 50,
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOffset: { width: 6, height: 9 },
    elevation: 14,
    shadowOpacity: 0.2,
    overflow: "hidden",
    zIndex: 0
  }
});
