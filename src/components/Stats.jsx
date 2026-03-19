import Avatar from "./Avatar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { changeStats } from "../actions/statsAction";


const Stats = () => {
    const { name } =useSelector((state) => state.user);
    const { followers, following } = useSelector((state) => state.stats);
    const dispatch = useDispatch();
    const increaseFollowers = () => {
        dispatch(changeStats('followers', 1));
    };
    const decreaseFollowers = () => {
        dispatch(changeStats('followers', -1));
    };
    const increaseFollowing = () => {
        dispatch(changeStats('following', 1));
    };
    const decreaseFollowing = () => {
        dispatch(changeStats('following', -1));
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