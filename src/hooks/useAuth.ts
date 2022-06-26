import {getStringData} from "@utils/localStorage";
import {storageKeys} from "@constants";
import {isEmptyObject} from "../utils";
import {useSelectorTyped} from "@hooks/useSelectorType";

const useAuth = () => {
    const { userData } = useSelectorTyped(state => state.account);

    return {
        user: userData,
        isAuthenticated: (!!getStringData(storageKeys.USER_TOKEN)) && !isEmptyObject(userData)
    }
}

export default useAuth;