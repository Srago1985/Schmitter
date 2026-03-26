import { useSelector, useDispatch } from "react-redux";
import { changeAvatar, changeName } from "../features/users/userSlice.js";


const Avatar = ({size}) => {
    const { avatar, name } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <img 
            src={avatar} 
            alt={name}
            onClick={() => {
                const url = prompt("Enter avatar URL");
                dispatch(changeAvatar(url));
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const name = prompt("Enter new username");
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`} 
            
        />
    )
}

export default Avatar;