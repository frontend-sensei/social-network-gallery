const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]    
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})

/*
added

const webpack = require('webpack')

new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

*/