import AWS from '/var/runtime/node_modules/aws-sdk/lib/aws.js';

export class DatabaseClient {
    #table = null;

    constructor(tableName) {
        this.#table = new AWS.DynamoDB.DocumentClient({
            params: { TableName: tableName }
        });
    }

    async save({ pkValue, skValue, data }) {
        try {
            await this.#table.put({
                Item: { PK: pkValue, SK: skValue, data },
            }).promise();

            return data;
        } catch (e) {
            console.error('[DatabaseClient] save: ', e);
        }
    }

    async readByPk(pkValue) {
        try {
            const result = await this.#table.query({
                KeyConditionExpression: 'PK = :pkValue',
                ExpressionAttributeValues: { ':pkValue': pkValue }
            }).promise();
            return result['Items'];
        } catch (e) {
            console.error('[DatabaseClient] read: ', e);
        }
    }
}
