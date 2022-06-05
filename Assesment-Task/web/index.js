// Requiring express in our server
const express = require('express');
const app = express();
// Defining get request at '/elearning' route
app.get('/elearning', function(req, res) {
res.json({
	myFavouriteAuthor: "Robert Kiyosaki",
});
});

module.exports = app
