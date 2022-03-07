const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'src/public/build'),
        library: 'Aragorn',
        libraryTarget: 'umd',
    },
    module:{
        rules: [{
            test:/\.(.js)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    mode:'development'
}
