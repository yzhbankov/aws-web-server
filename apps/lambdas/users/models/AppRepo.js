import { getTableKey } from '../shared/utils/index.js';
import { USERS } from '../constants.js';

export class AppRepo {

    repository = null;

    static repositoryInstance = null;

    static setRepository(repository) {
        AppRepo.repositoryInstance = repository;
    }

    constructor() {
        this.repository = AppRepo.repositoryInstance;
    }

    async save(data) {
        const pkValue = getTableKey(USERS, data._id);
        const skValue = data.email;
        return this.repository.save({ pkValue, skValue, data });
    }


    async readById(id) {
        const pkValue = getTableKey(USERS, id);
        const records = await this.repository.readByPk(pkValue);
        return records.map(record => record['data']);
    }
}
