import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
      <Path d="M24 46.3 2.35 13.5q4.7-3.9 10.175-6.35Q18 4.7 24 4.7t11.5 2.45Q41 9.6 45.65 13.5Zm-5.95-26.15q1.3 0 2.15-.875.85-.875.85-2.175 0-1.3-.85-2.175-.85-.875-2.15-.875-1.3 0-2.175.875Q15 15.8 15 17.1q0 1.3.875 2.175.875.875 2.175.875ZM24 30.2q1.3 0 2.175-.85.875-.85.875-2.15 0-1.3-.875-2.175Q25.3 24.15 24 24.15q-1.3 0-2.175.875-.875.875-.875 2.175 0 1.3.875 2.15.875.85 2.175.85Z" />
    </Svg>
  )
}

export default SvgComponent
