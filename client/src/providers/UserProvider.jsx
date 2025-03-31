import { UserContext } from "../context/userContext";
import usePersistedState from "../hooks/usePersistedState";

export function UserProvider({
    children
}) {
    const [authData, setAuthData] = usePersistedState('auth', {})

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    const userLogoutHandler = () => {
        setAuthData({})
    }

    return (
        <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
            {children}
        </UserContext.Provider>
    )
}