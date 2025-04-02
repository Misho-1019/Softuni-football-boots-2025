import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/boots';

export const useBoots = () => {
    const [boots, setBoots] = useState([])

    useEffect(() => {
        request.get(baseUrl)
            .then(setBoots)
    }, [])

    return {
        boots
    }
}

export const useBoot = (bootId) => {
    const [boot, setBoot] = useState({})

    useEffect(() => {
        request.get(`${baseUrl}/${bootId}`)
            .then(setBoot)
    }, [bootId])

    return {
        boot,
    }
}

export const useCreateBoot = () => {
    const { accessToken } = useContext(UserContext)

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    const create = (bootData) => 
        request.post(baseUrl, bootData, options)

    return {
        create,
    }
}

export const useEditBoot = () => {
    const { request } = useAuth()

    const edit = (bootId, bootData) =>
        request.put(`${baseUrl}/${bootId}`, { ...bootData, id: bootId })

    return {
        edit,
    }
}

export const useDeleteBoot = () => {
    const { request } = useAuth()

    const deleteBoot = (bootId) =>
        request.delete(`${baseUrl}/${bootId}`)

    return {
        deleteBoot,
    }
}