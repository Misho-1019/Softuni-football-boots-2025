import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/boots';

export default {
    async getAll() {
        const result = await request.get(baseUrl)

        const boots = Object.values(result)

        return boots;
    },
    create(bootData) {
        return request.post(baseUrl, bootData)
    }
}