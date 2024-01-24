import { ReadUserById, CreateUser } from '../usecases/index.js';
import { requestHandler } from '../shared/system/index.js';

export class Controller {
    static async get({ body, param }) {
        return requestHandler(ReadUserById, { param })
    }
    static async post({ body, param }) {
        return requestHandler(CreateUser, { data: body })
    }
}
