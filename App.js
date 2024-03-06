import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

export default function App() {
  const [count, setCount] = useState(0);
  const sv = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value}deg` }],
  }));

  const increment = () => {
    if (count === 10) return;
    setCount((count) => count + 1);
    if (count >= 0) {
      sv.value = withTiming(180, { duration: 400 });
    }
  };

  const decrement = () => {
    if (count === -10) return;
    setCount((count) => count - 1);
    if (count <= 0) {
      sv.value = withTiming(360, { duration: 400 });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{
            height: height,
            width: width / 3,
          }}
          className="flex justify-end p-5"
          onPress={() => {
            decrement();
          }}
        >
          <Text className="bg-blue-400 justify-self-end p-2">Player 1</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 250,
          width: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View style={[containerStyle]}>
          <Text
            style={{
              fontSize: 200,
              color: "white",
            }}
          >
            {Math.abs(count)}
          </Text>
        </Animated.View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: height,
            width: width / 3,
          }}
          className="flex justify-start p-5"
          onPress={() => {
            increment();
          }}
        >
          <Text className="bg-blue-400 justify-self-end p-2 rotate-180">
            Player 2
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#e54e4e",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
