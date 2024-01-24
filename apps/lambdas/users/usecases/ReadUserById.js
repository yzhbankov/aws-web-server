import { AppRepo } from '../models/index.js';

export class ReadUserById {
    async execute({ param }) {
        return await new AppRepo().readById(param);
    }
}
