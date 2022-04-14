import {useSelector} from "react-redux";
import {getStringData} from "../utils/localStorage";
import {storageKeys} from "../constants";
import {isEmptyObject} from "../utils";

const useAuth = () =>{
    const { userData } = useSelector(state => state.account);

    return {
        user: userData,
        isAuthenticated: (!!getStringData(storageKeys.USER_TOKEN)) && !isEmptyObject(userData)
    }
}

export default useAuth;