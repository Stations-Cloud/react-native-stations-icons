import React from "react";
import * as Font from 'expo-font';
import { Text } from "react-native";
import { IconMapping, IStationsIcon } from "../interface";

const createIconsComponent = (fontName: string, json: IconMapping, font: any) => {
  return ({ name, color, size }: IStationsIcon<keyof typeof json>) => {
    const [fontLoaded, setFontLoaded] = React.useState(false);

    React.useEffect(() => {
      const loadFont = async () => {
        try {
          await Font.loadAsync({
            [fontName]: font
          });
          setFontLoaded(true);
        } catch (error) {
          console.error(`Erro ao carregar a fonte ${fontName}:`, error);
        }
      };

      loadFont();
    }, [fontName, font]);

    if (!fontLoaded) {
      return (<Text>... Carregando... </Text>);
    }


    return (
      <Text style={{ fontSize: size, color, fontFamily: fontName }}>
        {unescape(String(json[name]))}
      </Text>
    )
  }
};

export default createIconsComponent;
