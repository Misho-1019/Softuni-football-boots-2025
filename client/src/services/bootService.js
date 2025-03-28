import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/boots';

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