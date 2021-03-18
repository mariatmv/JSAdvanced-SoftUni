function requestValidator(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    if (!validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }

    if (!request.uri && !(/^([a-zA-Z.]+)/gm.test(request.uri) || request.uri === '\*')) {
        throw new Error('Invalid request header: Invalid URI')
    }

    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (!validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if (request.message && /[<>\&\\'"]+/gm.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return request
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))