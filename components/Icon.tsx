import {iconMap} from "../util/StyleUtil";
import {Text} from "react-native";

export function Icon({name, color, size, style}: {name: string, color: string, size: number, style?: any}) {
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
