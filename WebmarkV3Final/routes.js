'use strict';

const express = require('express');
const router = express.Router();

const welcome = require('./controllers/welcome');
const bookmarkDB = require('./controllers/bookmarkDB.js');
const about = require('./controllers/about.js');
const bookmarkList = require('./controllers/bookmarkList.js');
const accounts = require('./controllers/accounts.js');


router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/welcome', welcome.index);

router.get('/bookmarkDB', bookmarkDB.index);
router.get('/bookmarkDB/deleteBookmarkList/:id', bookmarkDB.deleteBookmarkList);
router.post('/bookmarkDB/addBookmarkList', bookmarkDB.addBookmarkList);

router.get('/about', about.index);

router.get('/bookmarkList/:id', bookmarkList.index);
router.get('/bookmarkList/:id/deleteBookmark/:bookmarkId', bookmarkList.deleteBookmark);
router.post('/bookmarkList/:id/addBookmark', bookmarkList.addBookmark);

router.post('/bookmarkDB/uploadpicture', bookmarkDB.uploadPicture);

module.exports = router;
