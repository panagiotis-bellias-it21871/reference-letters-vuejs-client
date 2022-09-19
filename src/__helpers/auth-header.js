export function authHeader() {
    // return authorization header with basic auth credentials
    let token = localStorage.getItem('token');

    if (token) {
        return { 'Access-Control-Allow-Origin' : '*',
                 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}