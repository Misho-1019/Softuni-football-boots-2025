
const baseUrl = 'http://localhost:3030/jsonstore/boots';

export default {
    async create(bootData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bootData)
        })

        const result = await response.json();

        return result;
    }
}