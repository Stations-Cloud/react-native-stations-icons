import React from "react";
import * as Font from 'expo-font';
import { Text } from "react-native";
import { IconMapping, IStationsIcon } from "../interface";

const createIconsComponent = (fontName: string, json: IconMapping, font: any) => {
  return ({ name, color, size }: IStationsIcon<keyof typeof json>) => {

    const [loaded, setLoaded] = React.useState(false);


    React.useEffect(() => {
      async function loadFont() {
        try {
          await Font.loadAsync({
            [fontName]: font,
          });
          setLoaded(true);
        } catch (error) {
          console.log("***Erro ao carregar fonte:", error);
        }
      }

      loadFont();
    }, []);

    if (!loaded) {
      return <Text style={{ fontSize: size, color }}>...Carregando</Text>;
    }

    return (
      <Text style={{ fontSize: size, color, fontFamily: fontName }}>
        {unescape(String(json[name]))}
      </Text>
    );
  }
};



export default createIconsComponent;