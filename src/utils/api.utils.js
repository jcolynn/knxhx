export const formattedURLWithQuery = ({url, queries = []}) => {
    let formattedURL = url;
    queries.forEach((query, index) => {
        formattedURL += index === 0 ? '?' : '&'
        formattedURL += `${query.param}=${query.value}`
    })
    return formattedURL;
}
