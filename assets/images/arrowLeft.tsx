import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeft({color, dim}:{color: string, dim: number}) {
    return (
        <Svg
            style={{
        width: dim,
            height: dim
    }}
    viewBox="0 0 24 24"
>
    <Path
        fill={color}
    d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"
    />
    </Svg>
)
}

export default ArrowLeft
