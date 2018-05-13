'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const bookmarkListStore = require('../models/bookmarkList-store');
const uuid = require('uuid');

const bookmarkList = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    const bookmarkListId = request.params.id;
    logger.debug('Bookmark id = ', bookmarkListId);
    if (loggedInUser) {
    const viewData = {
      title: 'BookmarkList',
      bookmarkList: bookmarkListStore.getBookmarkList(bookmarkListId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    response.render('bookmarkList', viewData);
    }
    else response.redirect('/');
  },
  
  deleteBookmark(request, response) {
    const bookmarkListId = request.params.id;
    const bookmarkId = request.params.bookmarkId;
    logger.debug(`Deleting Bookmark ${bookmarkId} from bookmarkList ${bookmarkListId}`);
    bookmarkListStore.removeBookmark(bookmarkListId, bookmarkId);
    response.redirect('/bookmarkList/' + bookmarkListId);
  },
  
  addBookmark(request, response) {
    const bookmarkListId = request.params.id;
    const bookmarkList = bookmarkListStore.getBookmarkList(bookmarkListId);
    const newBookmark = {
      id: uuid(),
      title: request.body.title,
      link: request.body.link,
    };
    bookmarkListStore.addBookmark(bookmarkListId, newBookmark);
    response.redirect('/bookmarkList/' + bookmarkListId);
  },
    
};

module.exports = bookmarkList;