import {
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { Button, Image, ScrollView, Stack, View } from "native-base";
import React, { useState } from "react";
import CharacterBox, { EStatus } from "../../components/CharacterBox";
import { useNavigation } from "@react-navigation/native";
import { practiceData } from "../../db/practice";
import { useRoute } from "@react-navigation/native";
import { QuizInput } from "react-native-quiz-input";

const imgWidth = Math.round(0.8 * Dimensions.get("screen").width);

const bgHeight = Math.round(((5 / 4) * imgWidth) / 6);

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Easy", level: "easy" },
  { text: "Medium", level: "medium" },
  { text: "Hard", level: "hard" },
];

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const Practice = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const [point, setPoint] = useState(0);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string = route.params.level ? route.params.level : "easy";
  const [correct, setCorrect] = useState<boolean | null>(null);

  const [typedWord, setTypedWord] = useState("");

  const onChange = (data: any) => {
    const ans = practiceData[level][currQues].ans;
    const newStatus = [...status];
    if (data.wordString.length == ans.length) {
      const ansText = ans.join("");
      setCorrect(ansText === data.wordString);
    } else {
      setCorrect(null);
    }
  };

  const onPress = (i: number) => () => {
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.NORMAL;
    }
    newStatus[i] = EStatus.CORRECT;
    setStatus(newStatus);
  };

  const onNext = () => {
    if (currQues < practiceData[level].length - 1) {
      setCurrQues(currQues + 1);
      setPoint(point + 1);
      const newStatus = [...status];
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL;
      }
      setStatus(newStatus);
    } else {
      navigation.navigate("PracticeResultScreen", { level: level, point });
    }
  };

  return (
    <Stack style={styles.container}>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} bg="#3D7944" />
      <View style={styles.header}>
        <Text style={styles.text_main}>Practice with herbal</Text>
        <Text style={styles.text_level}>Level: {show[level]}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text__ques}>
          {practiceData[level][currQues].ques}
        </Text>
      </View>
      <View style={styles.box__choose}>
        <QuizInput
          size='large'
          borderColor='#3D7944'
          wordStructure={practiceData[level][currQues].ans.map((c) => true)}
          onChange={onChange}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          style={styles.btn}
          key={level}
          onPress={() =>
            onNext
            // navigation.navigate("PracticeResultScreen", { level: level })
          }
        >
          <Text style={{ color: "#fff" }}>Continue</Text>
        </Button>
      </View>
      {correct != null &&<Text>{correct? "CORRECT":"IN_CORRECT"}</Text>}
    </Stack>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  text_main: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
  },
  text_level: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  main: {
    marginTop: 40,
    alignItems: "center",
  },
  text__ques: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  btn: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#249523",
  },
  box__choose: {
    flexDirection: "row",
    marginVertical: 20,
  },
  choose: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
});
