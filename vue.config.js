module.exports = {
    configureWebpack: {
        chainWebpack: (config) => {
            // remove the old loader
            config.module.rules.delete('svg');
        },
        // Merged into the final Webpack config
        plugins: [
            new MyAwesomeWebpackPlugin()
        ]
    }
}