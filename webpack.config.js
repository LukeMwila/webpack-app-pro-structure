module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'dist/main.js'
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