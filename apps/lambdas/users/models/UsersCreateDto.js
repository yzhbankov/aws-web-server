import AWS from '/var/runtime/node_modules/aws-sdk/lib/aws.js';

export class UsersCreateDto {
    /**
     * class BookmarkCreateDto
     * */

    /**
     * @property {String|null}
     * */
    _id = null;
    /**
     * @property {String|null}
     * */
    email = null;
    /**
     * @property {String|null}
     * */
    name = null;
    /**
     * @property {String|null}
     * */
    password = null;
    /**
     * @property {String|null}
     * */
    createdAt = null;

    constructor(data) {
        this._id = data._id || AWS.util.uuid.v4();
        this.email = data.email || null;
        this.name = data.name || null;
        this.password = data.password || null;
        this.createdAt = data.createdAt || new Date().toISOString();
    }
}
