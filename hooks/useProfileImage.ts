import {useEffect, useState} from "react";
import {AZURE_INSTANCE} from "../util/AuthUtil";

export const useProfileImage = () => {
    const [imageSource, setImageSource] = useState({
        uri: placeholder,
        method: 'GET',
        headers: {
            Authorization: ''
        }
    });

    useEffect(() => {
        if (AZURE_INSTANCE.isLoggedIn()) {
            AZURE_INSTANCE.getUserInfo().then((info) => {
                setImageSource({
                    uri: info.ImageUrl,
                    method: 'GET',
                    headers: {
                        // @ts-ignore //TODO
                        Authorization: 'Bearer ' + AZURE_INSTANCE.getToken().accessToken
                    }
                })
            });
        }
    }, []);

    return imageSource;
}

// Placeholder until the image is loaded
const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAErGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI1MCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjMwMC8xIgogICB0aWZmOllSZXNvbHV0aW9uPSIzMDAvMSIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yNlQyMjowNyswMTowMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yNlQyMjowNyswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InByb2R1Y2VkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAxLjEwLjYiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMTItMjZUMjI6MDcrMDE6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/Po1WSeAAAAGBaUNDUHNSR0IgSUVDNjE5NjYtMi4xAAAokXWR3yuDURjHP9uImChLkoulcTXyK3GjbGnU0popw827136obd7ed0vLrXK7osSNXxf8Bdwq10oRKbmUa+IGvZ7X1CR7Ts95Pud7zvN0znPAHkmrGaOqFzLZnB4O+Nyz0Tl3zSNO2nAxSIuiGtpYKBSkor3dYLPiVbdVq/K5f61+MW6oYKsVHlU1PSc8IRxcyWkWbwq71JSyKHws7NXlgsLXlh4r8ZPFyRJ/WKxHwn6wNwm7k7849ovVlJ4RlpfjyaTz6s99rJc449mZaYkd4u0YhAngw80k4/gZoo8RmYfopp8eWVEhv/c7f4plyVVl1iigs0SSFDm8oualelxiQvS4jDQFq/9/+2okBvpL1Z0+qH4wzZdOqNmAz6Jpvu+b5ucBOO7hLFvOX96D4VfRi2XNswuNa3ByXtZiW3C6Dq13mqIr35JD3J5IwPMRNESh+RLq5ks9+9nn8BYiq/JVF7C9A11yvnHhC5qeZ/1B+XePAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEc0lEQVRYhe2XbUxbVRjHn3NL773Q0hdooaUtLfQFWugqMBjDEfjgDA51cUbjEhNdNCFGE80SY6abL1n2ZSZmRl1idOgHt2XJdItzZguiQTdSQGAMWt66dYNLgbZAW1pS+uqHEiREKfeW4WL6/3Bvcs49//M7597nPM9FpKIRHj5h/zXAPyuNRUdpLDpKY9FRGouO0lh0lJHieFGuoK7auKfGaDRoAGDQarvRPdjZM+ie86Rii1JJ1XXVxjdeebZ576M4++/lhcKRq203Pz/zfWfPIGNnVgZfxWykXqts/fTd+l0mFgsLLAVtdso158nKJDNJXK9V7aoydNzsd897txUrK5M4caSlsa4CAHr6h986eup06w8XLrd3dParlbICiUiUw+fzuG0d3eFIlIE/w29Lpy6s2KFDCN2nZt45ftrca0m036dmfIuBbz87qpRLKnbotMWFA5ZxBv4MI1EuFfO4HADoHRjp6rOu7erqs/bdHgUAHpcjl4qZ+TPE4vO4JIEDwNS0Kx6Pr+2Kx+NT0y4AIAlcwOduK5bH6w8uhwBAXpCHEFrbhRCSS/MAILgc8nj924pFTbt8/gAAVJlKa6vK1nbt3lleaSoBAJ8/QE27mPkzjETfYsBUpjXq1fxsTnlpscu9EIvHc4S8uuryD99+tVSrBIBrv5rPXrweYRSJzI/TEnXhuS8/MuhUABBYCk46ZgFAUZDPySIBwDp272DL+2N3JpmZMz9O5xa8t4bGszlZmmJFJomLcgSiHAHOzlgOhS9d7fjg5Ne3rXeYOUOKyQcAhILs2sqy+lqTqVwLAAND43+YB8x9lgXPYiq2qWI9IG1ZYUPgbAJnb5Ubw+SDYUilkKpVMnGuUCwSiHMFQn42AMx7fE63x+med7k9Njs16XCuO2wfFBbOztjbUHPgyYYKY4mAxyUJHMfZJIGzWBgARCLR4HIoFAoHl0ML3sWuXsvFK7/9br4VjcZozbLZbwshpC2Wv/T8vkMHm4WC7ERjfEWQuAAAAoQQQqs3AACgHM6vvvvx/KU2yrE+U6WERRL40031xw6/rCmSA0AsFvN4/ZTDaRm1T0zNzrrmZ5zzM845AJDk5Urzc/PFOUq5RK9TKQry+DwOhmEAYB27d/yTb661mxNZa2Nt6iXuf6L+xJEWmVQcjkSGhu929w9391nNvUP2iel/Wz1CSK2S7d5ZXlNpqHlEbygpMuhUJ4+9TuDsC5fbk86YfLcInP1nW6umSB5YCn78xdkr129MOpyL/qXNrAcAeNwshSz/mX0Nh197IZMkbHaq6rFDoXBk41HJd0upkKhVMgD4+ZfOM+d+ovvv4PMvWUbtTveCXqc80NyoVsmUCsn4XWrjUcnPLbl0pXSxjNp9PoaFitfnT+QihJCiID/p88l3C8NWAspUpnnxuaZolElFwGKxTGWadYYpYa1qf1P9U4/vYcC0eZpV0cDCsESkb4eSY43YJt5879QWTjlim0j6zP+9gthapbHoKI1FR2ksOkpj0dFDivUXvNOS4JH4W9gAAAAASUVORK5CYII='
