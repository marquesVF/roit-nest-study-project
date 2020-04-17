import { Injectable } from '@nestjs/common';
import { ModelMapper } from '@roit/roit-model-mapper';
import axios from 'axios'

@Injectable()
export class HttpService {

    // TODO handle error properly
    async getRequest<T>(url: string, clazz: new () => T): Promise<T> {
        const response = await axios.get<T>(url)

        return ModelMapper.deserialize<T>(clazz, response.data)
    }

}
