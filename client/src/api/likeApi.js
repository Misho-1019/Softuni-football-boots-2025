import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../context/userContext";

const baseUrl = 'http://localhost:3030/data/likes';

export const useLikeBoot = () => {
    const { accessToken } = useContext(UserContext)

    const like = async (bootId) => {

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }
        
        return await request.post(baseUrl, { bootId }, options)
    }

    return {
        like,
    }
}

export const getTotalLikes = async (bootId) => {
    const result = await request.get(`${baseUrl}?where=bootId%3D%22${bootId}%22`)

    const uniqueUsers = new Set(result.map(like => like._ownerId))

    return uniqueUsers.size
}

export const hasUserLiked = async (bootId, userId) => {
    const url = `${baseUrl}?where=bootId%3D%22${bootId}%22%20and%20_ownerId%3D%22${userId}%22`

    const result = await request.get(url)

    return result.length > 0
}