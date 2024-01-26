export const defaultHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET, OPTIONS, POST, PUT, DELETE',
    'Access-Control-Allow-Headers' : 'Content-Type',
}

export const handler = async (event) => {
    try {
        // implement lambda function logic ...
        return {
            statusCode: 200,
            body: {},
            headers: {
                ...defaultHeaders

            }
        };
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
