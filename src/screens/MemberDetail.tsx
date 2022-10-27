import { Text, StyleSheet, Image, ImageBackground, Platform, StatusBar } from "react-native";
import React, { useState } from "react";
import { HStack, Box, Stack, ScrollView, View } from "native-base";
import { memberDetailData } from "../db/memberdetail";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";

export default function MemberDetail() {
  const route = useRoute<any>();
  // console.log(route.params);
  const navigation = useNavigation();

  const name = route.params.name ? route.params.name : "";
  return (
    <ScrollView>
      {Platform.OS == "android" && <StatusBar barStyle="dark-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} bg="#1C7C27" />
      <View style={{ height: "100%", backgroundColor: "#fff" }}>
        <Search />
        <Image
          style={{ width: "100%", height: '25%', zIndex: -1 }}
          source={memberDetailData[name].imgbg}
        />
        
        <View style={styles.container}>
          <View style={{ margin: 15 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>

            <View style={{ marginTop: 10 }}>
              <Text
                style={{ marginBottom: 20, fontSize: 16, fontWeight: "600" }}
              >
                Physical characteristic
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <ImageBackground
                    source={require("../../assets/images/weight.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>{memberDetailData[name].weight}</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <ImageBackground
                    source={require("../../assets/images/height.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>{memberDetailData[name].length}</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <ImageBackground
                    source={require("../../assets/images/width.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>{memberDetailData[name].width}</Text>
                </View>

              </View>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontWeight: "700" }}>
                  Climate zones:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {memberDetailData[name].climateZone}
                  </Text>
                </Text>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "700" }}>
                  Population:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {memberDetailData[name].population}
                  </Text>
                </Text>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "700" }}>
                  Habit:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {memberDetailData[name].habit}
                  </Text>
                </Text>
              </View>

              <View style={{ marginTop: 10}}>
                <Text style={{ fontWeight: "700" }}>Fact</Text>
                <View style={{ marginLeft: 10 }}>
                  {memberDetailData[name].facts.map((text) => (
                    <Text style={{ marginTop: 4 }} key={text}>
                      {text}
                    </Text>
                  ))}
                </View>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "700" }}>How to sow the seed</Text>
                <View >
                  {memberDetailData[name].seed.map((text) => (
                    <Text style={{ marginTop: 4 }} key={text}>
                      {text}
                    </Text>
                  ))}
                </View>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "700" }}>
                  How to grow:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {memberDetailData[name].grow}
                  </Text>
                </Text>
              </View>

              <View style={{ marginTop: 10}}>
                <Text style={{ fontWeight: "700" }}>How to care</Text>
                <View >
                  {memberDetailData[name].care.map((text) => (
                    <Text style={{ marginTop: 4 }} key={text}>
                      {text}
                    </Text>
                  ))}
                </View>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "700" }}>
                  How to harvest:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {memberDetailData[name].harvest}
                  </Text>
                </Text>
              </View>

              <View style={{ marginTop: 10, marginBottom: 15 }}>
                <Text style={{ fontWeight: "700" }}>Reference website:</Text>
                <View>
                  {memberDetailData[name].refer.map((text) => (
                    <Text style={{ marginTop: 4 }} key={text}>
                      {text}
                    </Text>
                  ))}
                </View>
              </View>

            </View>
          </View>
        </View>
        <View style={{ height: 500 }}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 20,
    marginTop: -40,
  },
});
