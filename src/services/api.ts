class ApiService {
    url = import.meta.env.VITE_API_URL

    getData(code: string) {
        return fetch(`${this.url}?s=${code}`).then(
            (response) => {
                return response.json()
            },
        )
    }
}

export default new ApiService()