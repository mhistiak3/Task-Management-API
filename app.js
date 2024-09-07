/*
 * Title: Task Management API
 * Description: Start Server for Task Management API Project
 * Author: Istiak Ahammad 
 * Date: 7/9/2024
 *
 */

/**
 * node modules
**/
const express = require('express');

/**
 * custom module
**/
const { APP_PORT } = require('./src/config');

// express app object
const app = express()




// Start server on port 4000
app.listen(APP_PORT,()=>{
    console.log(`Server start on: http://localhost:${APP_PORT}`);
    
})
