'use strict';
const _ = require('lodash');
const JsonStore = require('./json-store');

const bookmarkListStore = {

  store: new JsonStore('./models/bookmarkList-store.json', { bookmarkListCollection: [] }),
  collection: 'bookmarkListCollection',

  getAllBookmarkLists() {
    return this.store.findAll(this.collection);
  },
  
  getBookmarkList(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },
  
  addBookmarkList(bookmarkList) {
    this.store.add(this.collection, bookmarkList);
  },
  
  removeBookmarkList(id) {
    const bookmarkList = this.getBookmarkList(id);
    this.store.remove(this.collection, bookmarkList);
  },
  
  removeAllBookmarkLists() {
    this.store.removeAll(this.collection);
  },
  
  addBookmark(id, bookmark) {
    const bookmarkList = this.getBookmarkList(id);
    bookmarkList.bookmarks.push(bookmark);
  },
  
  removeBookmark(id, bookmarkId) {
    const bookmarkList = this.getBookmarkList(id);
    const bookmarks = bookmarkList.bookmarks;
    _.remove(bookmarks, { id: bookmarkId});
  },
  
  countBookmarkList(){
    return this.Collection.length(this.collection);
  },
  
};

module.exports = bookmarkListStore;
