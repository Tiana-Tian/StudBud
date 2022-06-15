//import the express package
const express = require('express');

//initialise the express framework
const app = express();

// Serve static files out of the 'dist' folder in stead of 'public'
app.use(express.static(__dirname + '/dist'));

// Serve the index.html when users access the 
// root directory using res.sendFile()
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

//Start the server, listening for incoming traffic and logging a message to the console:
let server = app.listen(8888, function(){
  console.log("App server is running on port 8888");
});