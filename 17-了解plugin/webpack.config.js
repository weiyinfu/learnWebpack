const HahaPlugin=require("./HahaPlugin.js")
const FunctionPlugin=require("./FunctionPlugin")
module.exports={
  mode:"development",
  entry:"./index.js",
  output:{
    filename:"[name].js"
  },
  plugins:[
      new HahaPlugin({
        one:1,two:2
      }),
      // new FunctionPlugin()
  ]
}