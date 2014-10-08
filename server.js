///<reference path='./typings/node/node.d.ts'/>
///<reference path='./typings/hapi/hapi.d.ts'/>

var Hapi = require( 'hapi' );
var port = process.env.port || 80;
var server = new Hapi.Server(port);

server.route([{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('/public/main.html');
    }
},{
    method: 'GET',
    path: '/oauth2callback.html',
    handler: function (request, reply) {
        reply.file('/public/oauth2callback.html');
    }
},{
    method: 'GET',
    path: '/{filename}',
    handler: {
        file: function (request) {
            console.log('request.params.filename: ' + '/public/' + request.params.filename);
            return request.params.filename;
        }
    }
}]);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});