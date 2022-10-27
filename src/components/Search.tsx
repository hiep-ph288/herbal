import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, IInputProps, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export interface SearchBarProps extends IInputProps {}

export default function Search(props: SearchBarProps) {
  return (
    <View style={{alignItems: 'center'}}> 
      <View style={{ position: "absolute", top: 20, width: "90%" }}>
        <Input
          h={10}
          InputRightElement={
            <Icon
              as={<MaterialIcons name="search" />}
              size="xl"
              mr={2}
              color="muted.400"
            />
          }
          placeholder="What are you looking for?"
          size={16}
          backgroundColor="#FFF"
          {...props}
        />
      </View>
    </View>
  );
}
