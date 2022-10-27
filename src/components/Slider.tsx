import { Dimensions, StyleSheet, View, ViewProps, Text } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Box, HStack } from "native-base";
import MemberImage, { MemberImageProps } from "./MemberImage";

export interface SlideProps extends ViewProps {
  data: MemberImageProps[];
}

const screenWidth = Dimensions.get("screen").width;

export default function Slider(props: SlideProps) {
  const { data, style, ...rest } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <View style={[styles.memberImageWrapper, style]} {...rest}>
      <Carousel
        data={data}
        renderItem={({ item, index }) => <MemberImage {...item} key={index} />}
        // itemHeight={Math.round(screenHeight * 0.5)}
        itemWidth={100}
        sliderWidth={screenWidth}
        onSnapToItem={(index) => setSlideIndex(index)}
      />
      <HStack justifyContent="space-around" width={40}>
        {data.map((_, i) => (
          <Box
            width={3}
            height={3}
            marginTop={2}
            borderRadius={100}
            bg={i == slideIndex ? "#000" : "gray.300"}
            key={i}
          />
        ))}
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  memberImageWrapper: {
    zIndex: 1,
    width: '100%',
    alignItems: "center",
  },
});
