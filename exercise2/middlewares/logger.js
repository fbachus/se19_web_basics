export const logger = (request, response, next) => {
    console.log(
        new Date().toUTCString(),
        request.ip,
        request.method,
        request.url,
    )
    next()
}
