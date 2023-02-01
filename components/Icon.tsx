import {iconMap} from "../util/StyleUtil";
import {Text} from "react-native";

interface propType {
    name: string,
    color: string,
    size: number,
    style?: any
}

export function Icon({name, color, size, style}: propType) {
    return (
        <Text style={[{
            fontFamily: 'IcoMoon',
            fontSize: size*.8,
            color: color
        }, style]}>
            {iconMap[name]}
        </Text>
    )
}
