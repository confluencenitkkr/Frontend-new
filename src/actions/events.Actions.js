import Agent from "./super";
import config from '../config/configg';
import {ServerError} from '../utils/helpers';
const BACKEND_URL = config.BACKEND_URL;




function getEvent(text, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/getEvents?text=${text}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function getSponsor(cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/getSponsor`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function getEventId(id, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/getEvent/${id}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function Search(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/searchJobs?text=${payload}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}


export default {
  getEvent,
  Search,
  getEventId,
  getSponsor
}