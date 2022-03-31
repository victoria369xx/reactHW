const requestUrl = 'http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]'

export const shibaApi = {
    get: async () => {
            const response = await fetch(requestUrl)
            if (!response.ok) {
                throw new Error('Error', response)
            }
            return response.json()
    }
}