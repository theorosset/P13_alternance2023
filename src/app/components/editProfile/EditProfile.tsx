import { FC, useEffect, useRef, useState } from "react";
import "./EditProfile.scss";
import { UserState } from "../../reducers/user.reducer";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import { updateProfile } from "../../actions/user.action";
import { useDispatch } from "react-redux";

interface Props {
    userInfo: UserState
    setShow: boolean
    updateShow: (value: boolean) => void;
}

const EditProfile: FC<Props> = ({userInfo, setShow, updateShow}) => {
    const form = useRef<HTMLFormElement>(null)
    const [isShow, setIsShow] = useState(setShow)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setIsShow(setShow)
    }, [setShow])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { current } = form;

        if (current) {
            const firstname = current[0] as HTMLInputElement;
            const lastname = current[1] as HTMLInputElement;
            const email = current[2] as HTMLInputElement;
            const password = current[3] as HTMLInputElement;

            const userUpdate =  {
                firstName: firstname.value,
                lastName: lastname.value,
                email: email.value,
                isConnected: true
            }
            if(password) {
                Object.assign(userUpdate, {password: password.value})
            }
            try {
                await dispatch(updateProfile(userUpdate, userInfo.token) as any);
                updateShow(false)
            } catch (error) {
                console.error(error)
            }
        }
    }
    const closeModal = () => {
        updateShow(false)
    }
    return (
        
        <div className={`modal-overlay ${isShow ? '' : 'displayNone'}`}>
            <div className="container__modal">
                <div className="container__modal--cross">
                    <button className="container__modal__close--button" onClick={closeModal}>x</button>
                </div>
                <div className="container__modal__header">
                    <h2 className="container__modal__header--title">Edit your profile</h2>
                </div>
                <div className="container__modal__content">
                    <form ref={form} className="container__modal__content__form" onSubmit={(e) => handleSubmit(e)}>
                        <label className="label-input" htmlFor="firstName">firstname</label>
                        <input type="text" id="firstName"  defaultValue={userInfo.firstName}/>
                        <label className="label-input" htmlFor="lastName">lastname</label>
                        <input type="text" id="lastName" defaultValue={userInfo.lastName}/>
                        <label className="label-input"  htmlFor="email">Your email</label>
                        <input type="text" id="email"  defaultValue={userInfo.email}/>
                        <label className="label-input"  htmlFor="password">Your password</label>
                        <input type="password" id="password" />
                        <br /><br />
                        <ButtonComponent text="Update your profile" useClassName="large"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
