import Response from "../utils/Response.js";


export const example = async (req, res) => {

    return Response.success(res, {message: "Example"})
}


export const findExample = async (_) => {

    return {message: "Example"}

}
