import { ImageSourcePropType, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { Image, Text, View } from "native-base";

export interface MemberImageProps {
  image: ImageSourcePropType;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export default function MemberImage(props: MemberImageProps) {
  const { image, wrapperStyle } = props;

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Image source={image} width="100%" alt="Animal" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    overflow: "hidden",
    width: '100%',
    height: 200,
  },
});
