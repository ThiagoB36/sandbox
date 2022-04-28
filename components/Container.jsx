import { View } from "react-native";
import styles from "./Container.module.css";

function Container(props) {
  return <View style={styles.container}> {props.children}</View>;
}

export default Container;
