import { HttpException, HttpStatus } from "@nestjs/common"

export default class BusinessException extends HttpException {

    constructor(message = 'Application business exception') {
        super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
