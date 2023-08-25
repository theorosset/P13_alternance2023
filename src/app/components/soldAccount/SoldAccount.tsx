import { FC } from "react"
import ButtonComponent from "../buttonComponent/ButtonComponent"
import './SoldAccount.scss'

interface Props {
    topText: string
    sold: string
    bottomText: string
}

const SoldAccount: FC<Props> = ({topText, sold, bottomText}) => {
    return (
       <div className="container__sold">
            <div className="container__sold__text">
                <h3 className="container__sold__text--top">{topText}</h3>
                <p className="container__sold__text--sold">{sold}</p>
                <p className="container__sold__text--bottom">{bottomText}</p>
            </div>
            <div className="container__sold--btn">
                <ButtonComponent text={"View transactions"} useClassName="large"/>
            </div>
       </div>
    )
}


export default SoldAccount