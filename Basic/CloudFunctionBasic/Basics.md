# Writing Cloud Functions

Cloud Functions can be written in Node.js, Python, Go, Java, .NET, Ruby, and PHP programming languages, and are executed in language-specific runtimes. The Cloud Functions execution environment varies by your chosen runtime. The runtime overview pages provide further details about each runtime environment:

Node.js Runtime
Python Runtime
Go Runtime
Java Runtime
.NET Runtime
Ruby Runtime
PHP Runtime
Types of Cloud Functions
There are two distinct types of Cloud Functions: HTTP functions and event-driven functions. Event-driven functions can be either background functions or CloudEvent functions, depending on which Cloud Functions runtime they are written for.

# Types of Cloud Functions

There are two distinct types of Cloud Functions: HTTP functions and event-driven functions. Event-driven functions can be either background functions or CloudEvent functions, depending on which Cloud Functions runtime they are written for.

# HTTP functions

You invoke HTTP functions from standard HTTP requests. These HTTP requests wait for the response and support handling of common HTTP request methods like GET, PUT, POST, DELETE and OPTIONS. When you use Cloud Functions, a TLS certificate is automatically provisioned for you, so all HTTP functions can be invoked via a secure connection.

For details, see Writing HTTP Functions.

Example:

Node.js
Python
Go
Java
C#
Ruby
PHP
functions/helloworld/index.jsView on GitHub Feedback

const escapeHtml = require('escape-html');

/**

* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* More info: https://expressjs.com/en/api.html#req
* @param {Object} res Cloud Function response context.
* More info: https://expressjs.com/en/api.html#res

 */
exports.helloHttp = (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
};
Event-driven functions
