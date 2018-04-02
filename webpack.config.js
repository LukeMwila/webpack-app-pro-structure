module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}