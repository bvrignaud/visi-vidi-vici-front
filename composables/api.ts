import {useRuntimeConfig} from "#app";

export const fetch = (url: string, fetchOptions: any = {}) => {
    const { apiUrl } = useRuntimeConfig();
    return $fetch(url, {
        baseURL: apiUrl,
        ...fetchOptions,
        headers: {
            // Authorization: `token ${useGithubCookie().value}`,
            ...fetchOptions.headers,
        },
    })
}
