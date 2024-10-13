const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getRooms,getRoomID,postRoom,updateRoom,deleteRoom } =require("../controller/roomController");

router.get('/rooms',authenticateToken,getRooms); // Get all products
router.get('/room/:id',authenticateToken,getRoomID ); // Get a product by ID
router.post('/room',authenticateToken,postRoom); // Create a new product
router.put('/room/:id',authenticateToken,updateRoom); // Update a product by ID
router.delete('/room/:id',authenticateToken,deleteRoom);

module.exports = router;