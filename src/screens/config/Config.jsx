import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, logout } from "../store/userSlice";

var altura = window.screen.height;
var largura = window.screen.width;
var alturaUtil = altura * 0.8;
var larguraUtil = largura * 0.8;
var larguraInput = largura * 0.7;
console.log({ altura });
console.log({ alturaUtil });
console.log({ larguraUtil });
console.log({ larguraInput });
console.log({ largura });

export const Config = () => {
  const [sttRazao, setRazao] = useState("");
  // const [sttCnpj, setCnpj] = useState("");
  // const [sttIE, setIE] = useState("");
  // const [sttStreet, setStreet] = useState("");
  // const [sttNumber, setNumber] = useState("");
  // const [sttDistrict, setDistrict] = useState("");
  // const [sttCity, setCity] = useState("");
  // const [sttState, setState] = useState("");

  const dispatch = useDispatch();

  // const obj = {};
  // const btn1 = () => {
  //   // setInfo(data, path);
  //   console.log({ sttRazao });
  //   console.log({ sttCnpj });
  //   console.log({ sttIE });
  //   console.log({ sttStreet });
  //   console.log({ sttNumber });
  //   console.log({ sttDistrict });
  //   console.log({ sttCity });
  //   console.log({ sttState });
  // };
  const btn1 = () => {
    dispatch(logout("teste logout"));
  };
  const btn2 = () => {
    dispatch(changeUser(sttRazao));
  };
  const state = useSelector((state) => state.user);
  console.log({ state });
  console.log({ sttRazao });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Razão Social</Text>
        <TextInput
          label="razaoSocial"
          style={styles.input}
          placeholder="Razão Social"
          onChangeText={(text) => setRazao(text)}
          value={sttRazao}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    // justifyContent: "center",
    width: "80%",
    height: alturaUtil,
    flexDirection: "column",
    backgroundColor: "#D3D3D3",
    marginTop: -65,
    zIndex: 0
  },
  box: {
    flexDirection: "column",
    marginTop: 80,
    margin: 10,
    width: "80%"
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    textAlign: "left"
  },
  input: {
    width: "100%",
    height: 30,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderBottomColor: "#000",
    borderColor: "#fff",
    borderRadius: 30,
    backgroundColor: "#fff",
    margin: 5,
    marginLeft: 10,
    alignSelf: "center"
  },

  button: {
    // flex:1,
    // height:800,
    // textAlign: "left",
    // justifyContent: "left",
  }
});
