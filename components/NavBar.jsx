import { useNavigate } from "react-router-dom";
import { StyleSheet, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiDevices } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

export const NavBar = () => {
  let navigate = useNavigate();
  function prods() {
    navigate("/");
  }
  function sales() {
    navigate("/sales");
  }
  function clients() {
    navigate("/clients");
  }
  function config() {
    navigate("/settings");
  }

  function onHover() {
    console.log("mouse on");
  }
  function onOut() {
    console.log("mouse out");
  }
  // const navigate = useNavigate('/settings')

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.item} onPress={prods}>
        <BiDevices size={20} />
        <Text style={styles.texto}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={sales}
        onMouseOver={onHover}
        onMouseOut={onOut}
      >
        <BiBarChartAlt2 size={20} color={"red"} />
        <Text style={styles.texto}>Vendas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={clients}>
        <MdPeopleAlt size={20} />
        <Text style={styles.texto}>Clientes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={config}>
        <MdSettings size={20} />
        <Text style={styles.texto}>Configurações</Text>
      </TouchableOpacity>
      {/* <Link to={'/settings'}>Configurações</Link> */}
    </View>
  );
};
const styles = StyleSheet.create({
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
  },
  texto: {
    fontSize: 18,
    fontWeight: 3
  },
  item: {
    alignItems: "center"
  }
});
