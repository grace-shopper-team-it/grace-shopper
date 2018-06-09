const router = require('express').Router();
const { User } = require('../db/models');
const userAdminRouter = require('./users.admin');
const isAdmin = require('./auth.middleware');

router.use(isAdmin, userAdminRouter);

module.exports = router;
