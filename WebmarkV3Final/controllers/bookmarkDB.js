'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const bookmarkListStore = require('../models/bookmarkList-store');
const accounts = require ('./accounts.js');
const pictureStore = require('../models/picture-store.js');

const bookmarkDB = {
  index(request, response) {
    logger.info('bookmarkDB rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Bookmark List Dashboard',
      bookmarks: bookmarkListStore.getAllBookmarkLists(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    logger.info('about to render', bookmarkListStore.getAllBookmarkLists());
    response.render('bookmarkDB', viewData);
    }
    else response.redirect('/');
  },
  
  deleteBookmarkList(request, response) {
    const bookmarkListId = request.params.id;
    logger.debug(`Deleting BookmarkList ${bookmarkListId}`);
    bookmarkListStore.removeBookmarkList(bookmarkListId);
    response.redirect('/bookmarkDB');
  },

  addBookmarkList(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newBookmarkList = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      bookmarks: [],
    };
    logger.debug('Creating a new BookmarkList', newBookmarkList);
    bookmarkListStore.addBookmarkList(newBookmarkList);
    response.redirect('/bookmarkDB');
  },
  
   uploadPicture(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    pictureStore.addPicture(loggedInUser.id, request.body.title, request.files.picture, function () {
      response.redirect('/bookmarkDB');
    });
 },
  

};



module.exports = bookmarkDB;
