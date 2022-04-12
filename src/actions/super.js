import http from 'superagent';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

let AuthIntercept = require('superagent-intercept')((err, res) => {
    if (res && res.body && (res.body.statusCode === 401 || res.body.statusCode === 403)) {
         removeSession();
         window.location = '/';
         return
    }
});

let removeSession = () => {
   
    cookie.remove('token', { path: '/' });
}

const getToken = () => {
    let token = cookie.get('token', { path: '/' });
    // console.log(token);
    return token
}


const fire = (method, url, shouldSendHeader=false) => {
    let token = getToken();
    let defaultHeaders = {}
    if (token) {
        defaultHeaders['token'] = token;
    }
 
    if(shouldSendHeader) {
        defaultHeaders['token'] = `Basic bG1zOmxtcw==`;
    }

    return http[method](url).set(defaultHeaders).use(AuthIntercept);
}




let Agent = {
    fire,
    getToken,
    removeSession,

}
export default Agent;
