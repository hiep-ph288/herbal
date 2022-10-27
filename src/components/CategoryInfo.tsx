import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export interface CategoryInfoProps extends TouchableHighlightProps {
  image: ImageSourcePropType;
  quantity: string;
  title: string;
  summary: string;
}

export default function CategoryInfo(props: CategoryInfoProps) {
  const { image, quantity, summary, title, ...rest } = props;
  return (
    <TouchableOpacity onPress={() => {}} {...rest}>
      <>
        <View style={styles.main}>
          <ImageBackground
            source={image}
            style={styles.insectImage}
            borderRadius={15}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        {/* <Text style={styles.quantity}>{quantity}</Text> */}
        {/* <Text style={styles.summary}>{summary}</Text> */}
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    margin: 11
  },
  insectImage: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: "#000",
  },
  // quantity: {
  //   fontSize: 13,
  //   color: "#000",
  // },
  // summary: {
  //   fontSize: 10,
  //   color: "#000",
  //   width: "70%",
  //   lineHeight: 12.19,
  //   letterSpacing: 1,
  //   marginTop: 10,
  //   fontWeight: "700",
  // },
});
