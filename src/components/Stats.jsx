import Avatar from "./Avatar.jsx";
import { changeStats } from "../features/stats/statsSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Stats = () => {
    const { name } =useSelector((state) => state.user);
    const { followers, following } = useSelector((state) => state.stats);
    const dispatch = useDispatch();
    const increaseFollowers = () => {
        dispatch(changeStats({ statsType: 'followers', sum: 1 }));
    };
    const decreaseFollowers = () => {
        dispatch(changeStats({ statsType: 'followers', sum: -1 }));
    };
    const increaseFollowing = () => {
        dispatch(changeStats({ statsType: 'following', sum: 1 }));
    };
    const decreaseFollowing = () => {
        dispatch(changeStats({ statsType: 'following', sum: -1 }));
    };
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar />
                {name}
            </div>
            <div className={'stats'}>
                <div onClick={increaseFollowers} onContextMenu={(e) => {e.preventDefault(); decreaseFollowers()}}>
                    Followers: {followers}</div>
                <div onClick={increaseFollowing} onContextMenu={(e) => {e.preventDefault(); decreaseFollowing()}}>
                    Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats;