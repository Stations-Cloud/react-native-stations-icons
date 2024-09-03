import { SvgProps } from "react-native-svg";

export interface IStationsIcon<NameType = string> extends SvgProps {
  name: NameType;
  size: number;
  color?: string;
}
