import Avatar from "./Avatar.jsx";
import { useContext } from "react";
import { SchmitterContext } from "../utils/context.js";

const Stats = () => {
    const { user, stats, increaseFollowers, decreaseFollowers } = useContext(SchmitterContext);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={increaseFollowers} onContextMenu={(e) => {e.preventDefault(); decreaseFollowers()}}>
                    Followers: {stats.followers}</div>
                <div>Following: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats;