import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class HttpService {
    // TODO handle error properly
    async getRequest<T>(url: string) {
        const response = await axios.get<T>(url)

        return response.data
    }
}
