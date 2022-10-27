import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";
import TextBox, { EStatus } from "./src/components/TextBox";
import PartSummary, { PartSummaryProps } from "./src/components/PartSummary";
import CategoryInfo, { CategoryInfoProps } from "./src/components/CategoryInfo";
import Category from "./src/screens/Category";
import { Stack } from "native-base";
import MemberDetail from "./src/screens/MemberDetail";


export default function Main() {
  // return <PartSummary {...data[0]} />;
  return <MemberDetail />;
}

const styles = StyleSheet.create({});
