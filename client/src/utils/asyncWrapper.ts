import IApiRes, { IApiData } from "../types/response";

const asyncWrapper = async (fn: () => Promise<IApiData>) => {
    try {
        return await fn()
    } catch (error) {
        const { response } = error as IApiRes
        console.log(response.data)
        return response.data
    }
}

export default asyncWrapper;