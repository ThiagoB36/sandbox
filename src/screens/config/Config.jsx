// import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
// import { TouchableOpacity } from "react-native-web";
// import { getInfo, setInfo } from "../../../../store/Connect";

export const Config = () => {
  const [sttRazao, setRazao] = useState("");
  const [sttCnpj, setCnpj] = useState("");
  const [sttIE, setIE] = useState("");
  const [sttStreet, setStreet] = useState("");
  const [sttNumber, setNumber] = useState("");
  const [sttDistrict, setDistrict] = useState("");
  const [sttCity, setCity] = useState("");
  const [sttState, setState] = useState("");

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
  // const btn2 = () => {
  //   const data = getInfo[path];
  //   const data2 = data.data;
  //   const data3 = data2.sobreNome;
  //   obj.teste = data3;
  //   console.log(data3);
  // };

  // const btn3 = () => {
  // setInfo(data2, path2);
  //   console.log(obj.teste);
  // };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={styles.button}>+ADD USER</Text>
      <View style={{ flexDirection: "column" }}>
        <View style={styles.container}>
          <Text style={styles.text}>Razão Social</Text>
          <TextInput
            label="razaoSocial"
            style={styles.input}
            placeholder="Razão Social"
            onChangeText={(text) => setRazao(text)}
            value={sttRazao}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>CNPJ</Text>
          <TextInput
            label="cnpj"
            style={styles.input}
            placeholder="CNPJ"
            onChangeText={(text) => setCnpj(text)}
            value={sttCnpj}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Inscrição Estadual</Text>
          <TextInput
            label="ie"
            style={styles.input}
            placeholder="Inscrição Estadual"
            onChangeText={(text) => setIE(text)}
            value={sttIE}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Rua</Text>
          <TextInput
            label="street"
            style={styles.input}
            placeholder="Rua"
            onChangeText={(text) => setStreet(text)}
            value={sttStreet}
          />
          <Text style={styles.text}>Numero</Text>
          <TextInput
            label="number"
            style={styles.input}
            placeholder="Numero"
            onChangeText={(text) => setNumber(text)}
            value={sttNumber}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Bairro</Text>
          <TextInput
            label="bairro"
            style={styles.input}
            placeholder="Bairro"
            onChangeText={(text) => setDistrict(text)}
            value={sttDistrict}
          />
          <Text style={styles.text}>Cidade</Text>
          <TextInput
            label="city"
            style={styles.input}
            placeholder="Cidade"
            onChangeText={(text) => setCity(text)}
            value={sttCity}
          />
          <Text style={styles.text}>Estado</Text>
          <TextInput
            label="state"
            style={styles.input}
            placeholder="Estado"
            onChangeText={(text) => setState(text)}
            value={sttState}
          />
        </View>
      </View>
      {/* <TouchableOpacity onPress={btn1}>
        <Text>BTN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={btn2}>
        <Text>BTN2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={btn3}>
        <Text>BTN3</Text>
      </TouchableOpacity>
      <Text>{obj.teste}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    // width: 700,
    fontSize: 15,
    // textAlign: "center",
    fontWeight: "bold",
    margin: 10
  },
  input: {
    width: 700,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    height: 40,
    width: "100%",
    justifyContent: "left"

    // alignItems: "center",
  },
  button: {
    // flex:1,
    // height:800,
    // textAlign: "left",
    // justifyContent: "left",
  }
});
