'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Application Running...', 'Success', res);
}

exports.allregistrasi = function (req, res) {
    connection.query("SELECT * FROM registrasi", function (error, rows, fields) {
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
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, 'Success', res);
            }
        } 
    )
}

exports.storeRegistrasi = function (req, res) {
    var nik = req.body.nik;
    var nama = req.body.nama;
    var jnk = req.body.jnk;
    var alamat = req.body.alamat;

    connection.query("INSERT INTO registrasi (nik, nama, jnk, alamat) VALUES (?, ?, ?, ?)", [nik, nama, jnk, alamat], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('Berhasil menambah data', 'Success', res);
            }
        }
    );
}