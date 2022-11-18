import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseIcon({color, dim}: {color: string, dim: number}) {
    return (
        <Svg viewBox={"0 0 48 48"} height={dim} width={dim}>
            <Path fill={color} d="M12.45 37.95l-2.4-2.4L21.6 24 10.05 12.45l2.4-2.4L24 21.6l11.55-11.55 2.4 2.4L26.4 24l11.55 11.55-2.4 2.4L24 26.4z" />
        </Svg>
    )
}

export default CloseIcon
