// Create web server
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url = require('url');

var comments = ['I love your site', 'This is the best site ever', 'Great site'];

// Create server
http.createServer(function (req, res) {
    // Check if the request is a POST
    if (req.method === 'POST') {
        var body = '';
        // Get the data from the request
        req.on('data', function (data) {
            body += data;
        });
        // When the data is received
        req.on('end', function () {
            // Parse the data
            var POST = qs.parse(body);
            // Add the comment to the list
            comments.push(POST.comment);
            // Redirect to the home page
            res.writeHead(302, {
                'Location': '/'
            });
            res.end();
        });
    } else {
        // Get the URL
        var path = url.parse(req.url).pathname;
        // Check if the URL is the home page
        if (path === '/') {
            // Read the home page
            fs.readFile('index.html', function (err, data) {
                // Write the data
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
