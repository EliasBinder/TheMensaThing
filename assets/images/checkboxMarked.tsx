import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckboxMarked({color, dim}:{color: string, dim: number}) {
        return (
            <Svg viewBox="0 0 24 24" width={dim} height={dim}>
                <Path fill={color} d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
            </Svg>
        )
}

export default CheckboxMarked
