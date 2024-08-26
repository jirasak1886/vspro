const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getRoom,getRoomID,postRoom,updateRoom,deleteRoom } =require("../controller/roomController");

router.get('/',authenticateToken,getRoom); // Get all products
router.get('/id',authenticateToken,getRoomID ); // Get a product by ID
router.post('/',authenticateToken,postRoom); // Create a new product
router.put('/',authenticateToken,updateRoom); // Update a product by ID
router.delete('/',authenticateToken,deleteRoom);

module.exports = router;