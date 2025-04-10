import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(username, bootId, comment) {
        return request.post(baseUrl, { username, bootId, comment })
    },
}