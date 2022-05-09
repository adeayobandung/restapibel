'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Application Running...', 'Success', res);
}

exports.allregistrasi = function (req, res) {
    connection.query("SELECT * FROM registrasi", function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, 'Success', res);
        }
    })
}

exports.getRegistrasi = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM registrasi WHERE id = ?", [id], 
        function (error, rows, fileds) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, 'Success', res);
            }
        } 
    )
}