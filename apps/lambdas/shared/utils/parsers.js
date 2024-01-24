export function parseRequest(event) {
    const body = event.body && JSON.parse(event.body);
    const idStartIndex = event.path.lastIndexOf('/') + 1;
    const param = event.path.substring(idStartIndex);

    return {
        body,
        param,
    }
}
