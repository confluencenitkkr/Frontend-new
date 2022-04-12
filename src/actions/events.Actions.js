import Agent from "./superAgent";
import config from '../config/configg';
import {ServerError} from '../utils/helpers';
const BACKEND_URL = config.BACKEND_URL;

function getEvent(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/getevent`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function editEvent(payload, id, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/users/editEvent/${id}`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function addEvent(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/users/addEvent`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function deleteEvent(id, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/deleteEvent/${id}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}



function Search(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/searchEvent?text=${payload}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}


export default {
  getEvent,
  editEvent,
  addEvent,
  deleteEvent,
  Search
}