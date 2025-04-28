const express = require('express');
const router = express.Router();
const controller = require("../../controllers/admin/message.controller"); 


router.get('/students', controller.getUsersThatSentMessages); 
router.post('/messages', controller.createMessage);  
router.get('/messages', controller.getMessages); 
router.put('/messages/:userId/read-all', controller.markAsRead);

module.exports = router;
