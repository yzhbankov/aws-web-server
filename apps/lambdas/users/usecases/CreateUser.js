import { AppRepo, UsersCreateDto } from '../models/index.js';

export class CreateUser {
    async execute({ data }) {
        // check for duplicates
        return new AppRepo().save(new UsersCreateDto(data));
    }
}
