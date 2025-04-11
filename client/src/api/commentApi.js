import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"

const baseUrl = 'http://localhost:3030/data/comments'

export const useComments = (bootId) => {
    const { request } = useAuth()
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `bootId="${bootId}"`
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments)
    }, [bootId])

    return {
        comments,
        setComments,
    }
}

export const useCreateComment = () => {
    const { request } = useAuth()

    const create = (bootId, comment) => {
        const commentData = {
            bootId,
            comment,
        }

        request.post(baseUrl, commentData)
    }

    return {
        create,
    }
}