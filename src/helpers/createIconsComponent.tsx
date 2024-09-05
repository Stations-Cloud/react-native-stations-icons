import React from "react";
import * as Font from 'expo-font';
import { Text } from "react-native";
import { IconMapping, IStationsIcon } from "../interface";

const createIconsComponent = (fontName: string, json: IconMapping, font: any) => {
  return ({ name, color, size }: IStationsIcon<keyof typeof json>) => {

    const [loaded] = Font.useFonts({
      [fontName]: font
    });

    if (!loaded) {
      return (<Text> </Text>)
    }

    return (
      <Text style={{ fontSize: size, color, fontFamily: fontName }}>
        {unescape(String(json[name]))}
      </Text>
    )
  }
};



export default createIconsComponent;