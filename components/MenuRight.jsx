import { useNavigate } from "react-router-dom";
import { StyleSheet, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiDevices } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

export const MenuRight = () => {
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
  // const navigate = useNavigate('/settings')

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.stlMenu} onPress={prods}>
        <BiDevices size={20} />
        <Text style={styles.texto}> </Text>

        <Text style={styles.texto}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.stlMenu} onPress={sales}>
        <BiBarChartAlt2 alignmentBaseline="space" size={20} />
        <Text style={styles.texto}> </Text>
        <Text style={styles.texto}>Vendas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stlMenu} onPress={clients}>
        <MdPeopleAlt size={20} />
        <Text style={styles.texto}> </Text>

        <Text style={styles.texto}>Clientes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stlMenu} onPress={config}>
        <MdSettings size={20} />
        <Text style={styles.texto}> </Text>

        <Text style={styles.texto}>Configurações</Text>
      </TouchableOpacity>
      {/* <Link to={'/settings'}>Configurações</Link> */}
    </View>
  );
};
const styles = StyleSheet.create({
  navBar: {
    flexDirection: "colunm",
    width: 200,
    height: "100%",
    backgroundColor: "#00CED1",
    // padding: 1,
    marginBottom: 1,
    fontSize: 50,
    alignItems: "center",
    padding: 20,
    paddingStart: 50,
    paddingEnd: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 10, height: 9 },
    elevation: 14,
    // shadowOpacity: 0.12,
    overflow: "hidden",
    zIndex: 99
  },

  texto: {
    fontSize: 18,
    fontWeight: 3
  },

  stlMenu: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between"
  }
});
