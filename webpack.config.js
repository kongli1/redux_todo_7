/**
 * Created by likon on 2016/8/3.
 */
module.exports ={
    entry:"./index.js",
    output:{
        //path:__dirname+"/dist",
        filename:"client.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0','react']
                }
            }
        ]
    }
}