'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/registrasi')
        .get(jsonku.allregistrasi);

    app.route('/registrasi/:id')
        .get(jsonku.getRegistrasi);

    app.route('/registrasi')
        .post(jsonku.storeRegistrasi);

    app.route('/registrasi')
        .put(jsonku.updateRegistrasi);

}       