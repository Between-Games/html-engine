const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
        library: 'HtmlElementEngine',
        libraryTarget: 'umd',
        globalObject: 'this',
        path: path.resolve(__dirname, 'build'),
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'source/index.d.ts',
                },
            ],
        }),
    ],
};
