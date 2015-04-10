'use strict';

var authMiddleware = function(req, res, next) {
  var context = this;
  console.log('Using the Middleware!');
}

module.exports = { authMiddleware: authMiddleware};