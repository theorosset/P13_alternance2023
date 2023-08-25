import { FC } from "react"
import "./ButtonComponent.scss"

interface Props {
    text: string
    useClassName: string
    onClick?: () => void;
}


const ButtonComponent: FC<Props> = ({text, useClassName, onClick}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="container__button">
            <button className={"container__button--btn" + ' ' + useClassName} onClick={handleClick}>{text}</button>
        </div>
    )
}

export default ButtonComponent