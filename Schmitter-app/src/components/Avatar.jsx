import { useContext } from "react";
import { SchmitterContext } from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar} = useContext(SchmitterContext);
    return (
        <img 
        onClick={() => {
            const url = prompt("Enter avatar URL");
            changeAvatar(url);
        }}
        className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    )
}

export default Avatar;