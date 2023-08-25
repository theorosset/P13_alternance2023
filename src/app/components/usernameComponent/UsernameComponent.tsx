import { FC } from "react"
import "./UsernameComponent.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../reducers"


const UsernameComponent: FC = () => {
    const user = useSelector((state: RootState) => state.userReducer);
    

    
    return (
        <div className="container__username">
            <h1>
                Welcom back 
                <br />
                { user.firstName } { user.lastName }!
            </h1>
        </div>
    )
}

export default UsernameComponent