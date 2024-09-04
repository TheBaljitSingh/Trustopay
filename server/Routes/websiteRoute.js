const express = require('express');

const router = express.Router();

const {getAllWebsites, getWebsiteById, createWebsite, updateWebsite, deleteWebsite, verifyWebsite, searchWebsites} = require('../controllers/websiteController');

//All Routes for Genuine
router.route('/websites').get(getAllWebsites);
router.route('/websites/:id').get(getWebsiteById);
router.route('/websites').post(createWebsite);
router.route('/websites/:id').put(updateWebsite);
router.route('/websites/:id').delete(deleteWebsite);
router.route('/websites/:id/verify').patch(verifyWebsite);
router.route('/search').get(searchWebsites)

module.exports = router;
