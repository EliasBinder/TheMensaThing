import * as React from "react"
        import Svg, { Path } from "react-native-svg"

        function RocketIcon({color}: {color: string}) {
        return (
<Svg
        width={37}
        height={37}
        viewBox="0 0 37 37"
        fill="none"
        >
<Path
d="M7.284 15.532l3.932 1.696a46.58 46.58 0 011.406-2.601 34.746 34.746 0 011.561-2.448l-2.929-.617-3.97 3.97zm6.013 3.238l5.087 5.087a36.76 36.76 0 004.124-2.312c1.26-.822 2.287-1.632 3.084-2.428 2.055-2.056 3.565-4.156 4.528-6.302.964-2.145 1.497-4.606 1.6-7.38-2.775.102-5.235.635-7.38 1.599-2.146.963-4.247 2.473-6.302 4.529-.797.796-1.606 1.824-2.429 3.083a36.77 36.77 0 00-2.312 4.124zm8.903-3.816c-.488-.514-.732-1.143-.732-1.888 0-.746.244-1.375.732-1.889.514-.488 1.143-.732 1.889-.732.745 0 1.374.244 1.888.732.488.514.732 1.143.732 1.889 0 .745-.244 1.374-.732 1.888-.514.488-1.143.732-1.889.732-.745 0-1.374-.244-1.888-.732zm-.578 14.916l3.97-3.97-.617-2.93c-.77.54-1.587 1.06-2.447 1.562-.861.5-1.728.97-2.602 1.407l1.696 3.93zM34.379 2.775c.206 3.7-.25 7.008-1.368 9.925-1.118 2.916-2.936 5.646-5.454 8.19a.382.382 0 00-.135.115c-.038.052-.07.09-.096.116l.848 4.24c.077.462.051.899-.077 1.31-.129.41-.347.77-.655 1.079l-6.707 6.745-3.43-7.978-6.668-6.668-7.978-3.43 6.745-6.706c.334-.309.7-.527 1.099-.656a2.705 2.705 0 011.29-.077l4.24.848a.63.63 0 01.097-.077c.038-.026.083-.051.135-.077 2.543-2.544 5.28-4.38 8.209-5.511 2.93-1.131 6.23-1.594 9.905-1.388zM5.473 24.513c.925-.951 2.068-1.433 3.43-1.446 1.362-.013 2.505.456 3.43 1.407.951.925 1.42 2.068 1.407 3.43-.013 1.362-.495 2.518-1.445 3.469-.694.694-1.786 1.272-3.276 1.734-1.49.463-3.662.874-6.514 1.234.36-2.827.765-4.998 1.214-6.514.45-1.516 1.034-2.62 1.754-3.315zm1.85 1.888c-.36.36-.675.931-.944 1.715-.27.784-.508 1.792-.713 3.026 1.259-.206 2.274-.444 3.044-.713.771-.27 1.35-.572 1.735-.906.462-.411.7-.931.713-1.561.013-.63-.212-1.175-.675-1.638-.462-.437-1.002-.649-1.618-.636-.617.013-1.131.25-1.542.713z"
fill={color}
/>
        </Svg>
        )
        }

        export default RocketIcon
