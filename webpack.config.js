const path = require('path');

module.exports = {
    mode: 'production',
    entry: './source/index.js',

    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 200,
        ignored: '/node_modules/',
    },

    output: {
        filename: 'index.js',
        library: 'utility-engine',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'build'),
    },
};
