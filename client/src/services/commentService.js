import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(bootId) {
        const comments = await request.get(baseUrl)

        const bootComments = Object.values(comments).filter(comment => comment.bootId === bootId)

        return bootComments;
    },
    create(username, bootId, comment) {
        return request.post(baseUrl, { username, bootId, comment })
    },
}