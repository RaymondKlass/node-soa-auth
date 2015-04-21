# node-soa-auth
Token Based Auth built with Node.js and SOA in mind

Token based authentication example written in node.js as a middleware plugin - can be used both for issuing tokens and resolving them.  Handles storing of tokens in redis for the portion meant to run as a standalone service - the other portion is meant to be run as a middleware to other endpoints, and insures only authenticated user's see private information.

Run in development with from the node-soa_auth_example_app directory:

```
DEBUG=node-soa_auth_example_app ./bin/www
```

Or run with nodemon

```
sudo DEBUG=node-soa_auth_example_app nodemon ./bin/www --watch ./ --watch ../node-soa-auth
```