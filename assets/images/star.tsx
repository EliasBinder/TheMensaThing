import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StarIcon = ({color, dim}:{color: string, dim: number}) => (
    <Svg
        width={dim}
        height={dim}
        viewBox="0 0 32 34"
        fill="none"
    >
        <Path
            d="M10.767 25.979L16 22.744l5.233 3.269-1.4-6.125 4.6-4.129-6.066-.55L16 9.428l-2.367 5.746-6.066.55 4.6 4.13-1.4 6.125zm-3 4.3l2.166-9.668-7.266-6.504 9.6-.86L16 4.13l3.733 9.118 9.6.86-7.266 6.504 2.166 9.669L16 25.153 7.767 30.28z"
            fill={color}
        />
    </Svg>
);

export default StarIcon
