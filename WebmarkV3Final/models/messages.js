'use strict';
const _ = require('lodash');
const JsonStore = require('./json-store');

const messagesStore = {

  store: new JsonStore('./models/messages.json', { messagesCollection: [] }),
  collection: 'messagesCollection',
  
  addMessage(message) {
    this.store.add(this.collection, message);
  },
}