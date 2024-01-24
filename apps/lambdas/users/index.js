import { AppRepo } from './models/index.js';
import { DatabaseClient } from './shared/models/index.js';
import { router } from './shared/system/index.js';
import { Controller } from './controller/index.js';

AppRepo.setRepository(new DatabaseClient('prod_aws_web_service_table'));

export const handler = async (event) => {
    try {
        return router(Controller)(event['httpMethod'], event);
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
};
