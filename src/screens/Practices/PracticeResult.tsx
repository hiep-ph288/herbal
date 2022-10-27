import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Image, Stack } from "native-base";
import { useRoute } from "@react-navigation/native";
import { practiceData } from "../../db/practice";
import { useNavigation } from "@react-navigation/native";

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const PracticeResult = () => {
  const route = useRoute<any>();
  const level: string = route.params.level ? route.params.level : "easy";
  const navigation = useNavigation<any>();

  return (
    <View style={styles.bg}>
      <Text style={styles.text__main}>Practice with herbal</Text>
      <Text style={styles.text__level}>Level: {show[level]}</Text>
      <View style={styles.container}>
        <Text style={styles.text__comment}>Great Job</Text>
        <Text style={styles.text__score}>Your score</Text>
        <View style={styles.box__score}>
          <View style={[styles.ques, styles.ques__total]}>
            <Text style={styles.ques__num}>{practiceData[level].length}</Text>
            <Text>question</Text>
          </View>
          <View style={[styles.ques, styles.ques__true]}>
            <Text style={[styles.ques__num, styles.text__white]}>8</Text>
            <Text style={styles.text__white}>true</Text>
          </View>
          <View style={[styles.ques, styles.ques__false]}>
            <Text style={[styles.ques__num, styles.text__white]}>2</Text>
            <Text style={styles.text__white}>false</Text>
          </View>
        </View>
        <Button
          style={styles.btn_complete}
          onPress={() => navigation.navigate("PracticeHomeScreen")}
        >
          <Text style={styles.text_complete}>Complete</Text>
        </Button>
      </View>
    </View>
  );
};

export default PracticeResult;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F5F27",
    alignItems: "center",
  },
  text__main: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 100,
  },
  text__level: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 30
  },
  container: {
    width: "90%",
    height: "60%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: "center",
  },
  text__comment: {
    fontSize: 40,
    color: "#000",
    marginTop: 50,
    fontWeight: '600'
  },
  text__score: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    fontWeight: '500'
  },
  box__score: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
  },
  ques: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  ques__total: {
    backgroundColor: "#FFB524",
  },
  ques__true: {
    backgroundColor: "#3D7944",
  },
  ques__false: {
    backgroundColor: "#FF2727",
  },
  ques__num: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
  },
  text__white: {
    color: "#FFFFFF",
  },
  btn_complete: {
    width: "80%",
    height: 60,
    backgroundColor: "#249523",
    borderRadius: 6,
    marginBottom: 40
  },
  text_complete: {
    color: "#fff",
    fontSize: 20,
  },
});
