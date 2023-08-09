import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

export const handler: Handler = async (event: HandlerEvent, _: HandlerContext) => {
    return {
        statusCode: 200,
        body: "Hello from function!",
    }
}