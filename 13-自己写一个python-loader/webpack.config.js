const path=require("path")
module.exports={
    mode:"development",
    entry:"./index.js",
    output:{
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/.py$/,
                loader:'python-loader',
                options:{
                    pretty:true,
                }
            }
        ]
    },
    resolveLoader: {
        modules: [ 
          path.resolve(__dirname)
        ]
      }
}