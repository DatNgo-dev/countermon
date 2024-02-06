import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Button title="Player 1" />
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
            0
          </Text>
        </View>
      </View>
      <View>
        <Button title="Player 2" />
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
    justifyContent: "center",
    alignItems: "center",
  },
});
