import { Injectable } from '@nestjs/common';
import { ModelMapper } from '@roit/roit-model-mapper';
import axios from 'axios'
import ApiIntegrationException from 'src/exceptions/api-integration.exception';

@Injectable()
export class HttpService {

    async getRequest<T>(url: string, clazz: new () => T): Promise<T> {
        try {
            const response = await axios.get<T>(url)

            return ModelMapper.deserialize<T>(clazz, response.data)
        } catch (err) {
            throw new ApiIntegrationException(`Bad request to ${url}`)
        }
    }

}
