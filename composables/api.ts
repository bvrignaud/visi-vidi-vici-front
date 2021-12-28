import {useRuntimeConfig} from "#app";

export const fetch = async (url: string, fetchOptions: any = {}) => {
    const { apiUrl } = useRuntimeConfig();
    return $fetch(url, {
        baseURL: apiUrl,
        ...fetchOptions,
        headers: {
            ...fetchOptions.headers,
        },
    })
}
