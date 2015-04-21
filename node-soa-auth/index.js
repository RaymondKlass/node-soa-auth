'use strict';

var authMiddleware = function(req, res, next) {
  var context = this;
  
  // Basic Process
  
  // Authenticate if a request is sent to an address
  console.log(req.url);
  
  //console.log(req);
  next();
}

module.exports = { authMiddleware: authMiddleware};