import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MapIcon({color}: {color: string}) {
    return (
        <Svg
            width={38}
            height={42}
            viewBox="0 0 38 42"
            fill="none"
        >
            <Path
                d="M24.225 33.487l-10.41-3.68-7.007 2.81c-.527.264-1.042.237-1.543-.08-.502-.316-.752-.778-.752-1.385V9.065c0-.396.112-.746.336-1.05.224-.303.521-.534.89-.692l8.076-2.81 10.41 3.641 6.967-2.81c.527-.238 1.042-.205 1.543.099.502.303.752.758.752 1.365v22.365c0 .343-.112.64-.336.89a2.16 2.16 0 01-.851.575l-8.075 2.85zm-1.346-3.325V10.372l-7.758-2.613V27.55l7.758 2.613zm2.375 0l5.542-1.82V8.272l-5.542 2.099v19.791zm-18.05-.474l5.542-2.138V7.758l-5.542 1.86v20.07zm18.05-19.317v19.791-19.791zM12.746 7.758V27.55 7.758z"
                fill={color}
            />
        </Svg>
    )
}

export default MapIcon
