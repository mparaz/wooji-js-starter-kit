'use strict';

const config = require('./config.json');

module.exports = {
    config: Object.keys(config).map(file => {
        return {file: require('./' + file + '.js')};
    })
};
