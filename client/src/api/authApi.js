import { useContext, useEffect } from "react";
import request from "../utils/request";
import { UserContext } from "../context/userContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, { email, password })

        return result
    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (username, email, password) =>
        request.post(`${baseUrl}/register`, { username, email, password })

    return {
        register,
    }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext)

    useEffect(() => {
        if (!accessToken) {
            return
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }

        request.get(`${baseUrl}/logout`, null, options)
            .finally(userLogoutHandler)

    }, [accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken,
    }
}