'use strict';

var response = require('./res');
var koneksi = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Application Running...', res);
}