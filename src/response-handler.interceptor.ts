import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OkResponse } from '@roit/roit-response-handler'

@Injectable()
export class ResponseHandlerInterceptor implements NestInterceptor {

  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map(data => OkResponse(data))
      )
  }

}
