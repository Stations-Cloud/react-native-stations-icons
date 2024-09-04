import React from "react";

import { Text, StyleSheet, TextStyle } from "react-native";

const iconMap = {
  activity: "\uE000\uE62C\uE40D\uE0F2",
  "activity-heart": "\uE2F8\uEA31\uE009",
  anchor: "\uE000\uE544\uED3E\uE04C",
  archive: "\uE000\uE2CA\uE720\uE03F",
  "asterisk-01": "\uE000\uE655\uE856\uE0C5",
  "asterisk-02": "\uE000\uE655\uE856\uE0C4",
  "at-sign": "\uE000\uE2C3\uE165\uE0EA",
  bookmark: "\uE779\uE7A6\uE037",
  "bookmark-add": "\uE744\uEC08\uE08B",
  "bookmark-check": "\uE558\uE65E\uE0B2",
  "bookmark-minus": "\uE561\uE3E2\uE01A",
  "bookmark-x": "\uE000\uE4BD\uECCB\uE060",
  "building-01": "\uE000\uE548\uE8D1\uE047",
  "building-02": "\uE000\uE548\uE8D1\uE046",
  "building-03": "\uE000\uE548\uE8D1\uE045",
  "building-04": "\uE000\uE548\uE8D1\uE044",
} as const;

interface IStationsIcon {
  name: keyof typeof iconMap;
  size?: number;
  color?: string;
}

function General({ name, color, size = 32 }: IStationsIcon) {
  const General = iconMap[name];
  return (
    <Text style={[styles.icon, { fontSize: size, color } as TextStyle]}>
      {General}
    </Text>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontFamily: "Icons-General",
  },
});

export default General;
