import { Platform, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Image, ScrollView, Stack, Text, View } from "native-base";
import Header from "../components/Header";
import CategoryInfo from "../components/CategoryInfo";
import { categoriesData } from "../db/category";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView width="100%" bg="white">
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} bg="#1C7C27" />
      <Header title="Daily herbal's story" showSlide />
      <Stack style={{ marginTop: -50 }}>
        <Text paddingX={8} fontSize={18} bold>
          Our's herbal
        </Text>
        <View style={styles.container}>
          <View style={styles.main}>
            {categoriesData.map((item, index) => (
              <CategoryInfo
                key={index}
                onPress={() => {
                  navigation.navigate("Category", { name: item.title });
                }}
                {...item}
              />
            ))}
          </View>
        </View>
        <View marginBottom={50}></View>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center'
  },
  main: {
    width: '89%',
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
