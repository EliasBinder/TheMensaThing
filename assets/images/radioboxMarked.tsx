import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RadioboxMarked({color, dim}:{color: string, dim: number}) {
    return (
        <Svg viewBox="0 0 24 24" width={dim} height={dim}>
            <Path fill={color} d="M12 20a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8m0-18A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2m0 5a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5z" />
        </Svg>
    )
}

export default RadioboxMarked
