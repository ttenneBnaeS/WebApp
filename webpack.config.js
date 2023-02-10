var path = require('path')
var DIR = "./src"
var BUILD_DIR = path.resolve(__dirname, DIR + '/build/assets/scripts')
var APP_DIR = path.resolve(__dirname, DIR + '/client')

const configDev = {
    name: "Dev",
    context: BUILD_DIR,
    entry: {main: APP_DIR + "/index.js"},
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    target: "web",
    resolve: {
        extensions: ['.js','.jsx','.json']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: 'babel-loader', 
            }
        ]
    }
}

module.exports=[configDev]