import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Checkbox({color, dim}:{color: string, dim: number}) {
    return (
        <Svg viewBox="0 0 24 24" width={dim} height={dim}>
            <Path stroke={color} d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </Svg>
    )
}

export default Checkbox
