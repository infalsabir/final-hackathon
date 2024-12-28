const express = require('express');
const userController = require('../controller/userController'); // Adjust the path as needed
const router = express.Router();
const verifyToken = require('../helper/jwt')
// User routes
router.post('/users', userController.createUser); 
router.get('/users', userController.getAllUsers); 
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser); 
router.get('/users/:id', userController.getUserById); 
router.delete('/users/:id', userController.deleteUser); 
router.put('/users/:id', userController.updateUser); 

module.exports = router;

