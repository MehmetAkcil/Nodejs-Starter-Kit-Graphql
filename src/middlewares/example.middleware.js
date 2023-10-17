
const exampleMiddleware = (req, res, next) => {

    if (false) {
        return Response.unauthorized(res, {message: "Yetkisiz erişim"})
    }

    next()

}


export default exampleMiddleware