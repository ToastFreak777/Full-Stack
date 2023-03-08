export default class CustomApiError extends Error {
    statusCode;
    constructor(message) {
        super(message);
    }
}
