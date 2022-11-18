import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DashboardIcon({color, dim}: {color: string, dim: number}) {
        return (
            <Svg viewBox="0 0 24 24" width={dim} height={dim}>
                    <Path fill={color} d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10z" />
            </Svg>
        )
}

export default DashboardIcon
