import Agent from "./super";
import config from '../config/configg';
import {ServerError} from '../utils/helpers';
const BACKEND_URL = config.BACKEND_URL;

function googleLoginSignup(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/users/googleLoginSignup`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function Signup(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/users/Signup`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function Login(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/users/login`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function getuser(cb) {
  Agent
    .fire('get', `${BACKEND_URL}/auth/login/success`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}





export default {
    Login,
    Signup,
    getuser,
    googleLoginSignup
}