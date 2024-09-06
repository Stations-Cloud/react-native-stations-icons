export interface IStationsIcon<NameType = string> {
    name: NameType;
    size?: number;
    color?: string;
}
export interface IconMapping {
    [key: string]: string;
}
