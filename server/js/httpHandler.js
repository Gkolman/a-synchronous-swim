const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messagesQueue = require('./messageQueue')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

var getRandomDirection = () => {
  var num = Math.floor(Math.random()*(3-0+1)+0);
  var directions = ['left','right','down','up']
  return directions[num]
}

module.exports.router = (req, res, next = ()=>{}) => {
  // res.setHeader('Content-Type', 'text/html');

  //console.log('Serving request type ' + req.method + ' for url ' + req.url)

  next()

  res.writeHead(200, headers);

  if (req.method === 'GET') {


    // we can distinguish the types of GET requests by the url

    console.log('request type - > ', req.method)
    console.log('res.url -> ', req.url)
    console.log('background image -> ', module.exports.backgroundImageFile)
    var directionInQueue = messagesQueue.dequeue()
    if (directionInQueue) { res.write(directionInQueue) }
  }
  next();
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
