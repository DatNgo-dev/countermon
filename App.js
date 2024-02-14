import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  [count, setCount] = useState(0);

  const increment = () => {
    if (count === 10) return;
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count === -10) return;
    setCount((count) => count - 1);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.bottom} onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottom} onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: "250",
          height: 250,
          width: 250,
          backgroundColor: "blue",
        }}
      >
        <View
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 100,
              color: "white",
            }}
          >
            {Math.abs(count)}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.bottom} onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottom} onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#e54e4e",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  top: {
    height: height / 3,
    width: width,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    height: height / 3,
    width: width / 2,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
