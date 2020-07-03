import React from 'react'
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.ava} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAM1BMVEWVu9////+QuN6Mtt3v9PrP3/Dp8PidwOGzzeelxePk7fb7/P6tyebY5fKhwuK50enC1+wrv6NNAAADhElEQVR4nO1b7XKsIAyFAIIoyvs/bcWu7t7WxYSbrDMdz592tjvmNJ8kEaVu3LhxoxkAYFYsv3xeuIE+ZJfiguRy6JcPPilejckO+gWDTaP6FAWAbPUBrPuMKUw+kv6NbMTFw3T43+9amISVAGGoyV+cIYgygLkuvmAWZADhXL7WcjoAj5GvtRdj0OEIdELioRJ//yLLqMCfBMATg5eQDw4rX2snoQKDVsCiAoGMiAvBDQKhCIlCIPEToFhAxgYU+Vqzi6e5gIATUIKwgD0QaT4o4IXXE4g0ApE9DpGVcAN/RbwJUH2AW/7lTnh9GF6eCREdwSv4u4OeRqDnlq+ARuAPHkhocchfCohhIHAuv/xUTPNCkcaEUI46iVENvjeV6k57fHPKn4YKAG2DTqY9v3w+gB4QyIwHFP5MINCZbsAREBOPVIGgAhRqTiflAQWYiiQyH3oyOM0FQjlgx3Q2rJ5k5Z9WZdlh+cqgejyWHJVvMBUGs/zGRFWWFsLLirKtevz0hwfUuI3phXZXYMYYHyo24dfmyIbtbzGOAktEo9Zd3db2g+ndCwfr+l1myRQ2K1ZvMCqkh93tvg4B5cvutOxN/b6zBP+gNaTAxWFdkx57Gjzw/ODVP3mWqUa5n+ZO7x4L6me1tO4/1fD7kSsOH7tQPfruW7oYmPld5i8WfnkwFC9589WhPTtVs66Nufdr6fe+z7G20G3Nz4hucLALzo+qjRkSvyU75dl0SDLEwVwNscENqBuKOhqMwKmAJhUgF9VYkL2AOpg8A/msDNU3NeiwVALMFiDbgDIOwYHYsvPGQAExDjyzC5STDIkAcTSNAWluxJsGv0FKhtxZoICUCShDSSxIw0tgq8RPDBQNnDXhTQQIjbuED5K8kD8PFhByoSEuCXFIeC+UCAJSGNAWVFgQFllGQr7WeALsh4FvoMsRjDIERmwYUPfEWKBbNJk0QEgEErWwAF0PqS8rYIGe41Nf18ACvVC+noBIJiZM8rm7og3o7uh6E1wdhozDmVcMWPGntxjaYHvSuXxkTkZpJM5IAGBOTJYY0tx0FQnAh4SYAtaF2xR8+waj3GfKsZnDEDPDDSgwZsqOnBw7lyfDtjkp18r87KoT4R02utlLXEArj/R9oXHsGIMtonuvZC+/QTHqNIY5u3LXrevKbTeX5zBOxWU+duUN9st+V134u3Hjxp/BF9+CJ/iNmwljAAAAAElFTkSuQmCC" alt=""/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem