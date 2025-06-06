import { useEffect, useReducer } from "react"
import useAuth from "../hooks/useAuth"

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/comments`

function commentReducer(state, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload]
        case 'GET_ALL':
            return action.payload
        default: 
            return state        
    }
}

export const useComments = (bootId) => {
    const { request, accessToken } = useAuth()
    const [comments, dispatch] = useReducer(commentReducer, [])

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `bootId="${bootId}"`,
            load: `author=_ownerId:users`,
        })

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }

        request.get(`${baseUrl}?${searchParams.toString()}`, null, options)
            .then(result => dispatch({ type: 'GET_ALL', payload: result }))
    }, [bootId, accessToken])

    return {
        comments,
        addComment: (commentData) => dispatch({type: 'ADD_COMMENT', payload: commentData}),
    }
}

export const useCreateComment = () => {
    const { request } = useAuth()

    const create = (bootId, comment) => {
        const commentData = {
            bootId,
            comment,
        }

        return request.post(baseUrl, commentData)
    }

    return {
        create,
    }
}