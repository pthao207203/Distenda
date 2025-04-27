const express = require('express');
const router = express.Router();
const controller = require('../../controllers/client/message.controller');

const multer = require('multer');
const upload = multer();
const uploadCloud = require('../../middlewares/admin/uploadCloud.middleware');


  router.get('/instructors', controller.getInstructorsByUserToken);
  router.get('/messages', controller.getMessages);
  router.post('/messages', controller.createMessage);
  router.put('/messages/:instructorId/read-all',controller.markAsRead);

module.exports = router;