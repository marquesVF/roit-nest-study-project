import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '@roit/roit-response-handler';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus()

    response
      .status(status)
      .json(ErrorResponse('Internal Server Error', [exception]))
  }

}
