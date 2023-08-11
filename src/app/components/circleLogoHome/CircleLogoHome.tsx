import { FC } from "react";
import "./CircleLogoHome.scss"

interface Props {
    icon: string,
    title: string,
    text: string
}

const CircleLogoHome: FC<Props> = ({icon, title, text}) => {
    return (
        <div className="container__circle">
            <img  className="container__circle--icon" src={icon} alt="img of item" />
            <h3 className="container__circle--title">{ title }</h3>
            <p className="container__circle--text">{ text }</p>
        </div>
    )
}

export default CircleLogoHome