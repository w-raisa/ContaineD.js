/* server.js - Express server*/
'use strict';
const log = console.log
const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res)=> {
	res.sendFile(path.join(__dirname, '/pub/examples.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})  