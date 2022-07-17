import {useRef}  from 'react';
import {useSelector, useDispatch} from "react-redux";
import {updatePhoto} from "../features/user";

const ProfilePage = () => {
    const dis = useDispatch()
    const photoRef = useRef()
    const userState = useSelector(state => state.user.value)

    function changePhoto() {
        const user = userState.currentUser.user
        const imageUrl = photoRef.current.value

        const userIndex = userState.allUsers.findIndex(x => x.user === user)

        let userUpdated = {...userState.currentUser}
        userUpdated.image = imageUrl

        dis(updatePhoto({
            index: userIndex,
            current: userUpdated
        }))
    }

    return (
        <div>
            <img src={userState.currentUser.image} alt=""/>
            <h3>{userState.currentUser.user}</h3>

            <input ref={photoRef} type="text" placeholder="photo url"/>
            <button onClick={changePhoto}>Change photo</button>
        </div>
    );
};

export default ProfilePage;