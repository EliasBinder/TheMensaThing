import * as React from "react"
import Svg, { Path } from "react-native-svg"

function fork({color}: {color:string}) {
  return (
    <Svg 
        width={25}
        height={25}    
        viewBox="0 0 24 24"
        fill="none">
      <Path
        d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"
        fill={color}
      />
    </Svg>
  )
}

export default fork
