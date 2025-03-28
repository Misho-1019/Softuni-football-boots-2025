import { useContext } from "react";
import { UserContext } from "../context/userContext";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/boots';

export default {
    async getAll() {
        const result = await request.get(baseUrl)

        const boots = Object.values(result)

        return boots;
    },
    getOne(bootId) {
        return request.get(`${baseUrl}/${bootId}`)
    },
    create(bootData) {
        return request.post(baseUrl, bootData)
    },
    delete(bootId) {
        return request.delete(`${baseUrl}/${bootId}`)
    },
    edit(bootId, bootData) {
        return request.put(`${baseUrl}/${bootId}`, { ...bootData, _id: bootId })
    },
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