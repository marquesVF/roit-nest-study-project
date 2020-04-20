import { HttpException, HttpStatus } from "@nestjs/common"

export default class ApiIntegrationException extends HttpException {

    constructor(message = 'Bad request to third part API') {
        super(message, HttpStatus.BAD_REQUEST);
    }

}
