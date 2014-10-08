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
    path: '/{filename}',
    handler: {
        file: function (request) {
            console.log('request.params.filename: ' + '/public/' + request.params.filename);
            return request.params.filename;
        }
    }
},{
    method: 'GET',
    path: '/js/{filename*}',
    handler: {
        directory: {
            path: 'public/js'
        }
    }
},{
    method: 'GET',
    path: '/css/{filename*}',
    handler: {
        directory: {
            path: 'public/css'
        }
    }
},{
    method: 'GET',
    path: '/img/{filename*}',
    handler: {
        directory: {
            path: 'public/img'
        }
    }
}]);

server.start(function () {
    //console.log('Server running at:', server.info.uri);
});