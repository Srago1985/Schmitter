import { useContext } from "react";
import { SchmitterContext } from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(SchmitterContext);
    return (
        <img 
            onClick={() => {
                const url = prompt("Enter avatar URL");
                changeAvatar(url);
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const name = prompt("Enter new username");
                changeName(name);
            }}
            className={`user-avatar ${size ?? ''}`} 
            src={user.avatar} 
            alt={user.name}
        />
    )
}

export default Avatar;