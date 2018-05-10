'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');

const welcome = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    logger.info('welcome rendering');
    if (loggedInUser) {
    const viewData = {
      title: 'Welcome to Webmark',
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    response.render('welcome', viewData);
  }
    else response.redirect('/');
  },
};

module.exports = welcome;
