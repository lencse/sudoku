var path = require('path');

module.exports = {
    entry: ['./build/main.js'],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }

};
