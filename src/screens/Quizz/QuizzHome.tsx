import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Image, Stack } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface LevelInfo {
  text: string;
  level: string;
  bg: string;
}

const levels: LevelInfo[] = [
  { text: "Easy", level: "easy", bg: "#249523"},
  { text: "Medium", level: "medium",  bg: "#FFB524" },
  { text: "Hard", level: "hard",  bg: "#FF3B3B" },
];

const QuizzHome = () => {
  const navigation = useNavigation<any>();
  return (
    <Stack style={{ height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textmain}>Herbal's quiz</Text>
        {levels.map((info) => (
          <TouchableOpacity
            style={[styles.box, {backgroundColor: info.bg}]}
            key={info.level}
            onPress={() =>
              navigation.navigate("QuizzScreen", { level: info.level })
            }
          >
            <Text style={styles.text}>{info.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Stack>
  );
};

export default QuizzHome;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textmain: {
    color: '#000',
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
  },
  box: {
    width: "60%",
    height: 65,
    backgroundColor: "#249523",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20
  },
});
