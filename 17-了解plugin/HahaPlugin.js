class Haha{
  constructor(options) {
    //只有一个options参数
    console.log("constructor")
    console.log(options)
  }
  apply(compiler){
    console.log("apply")
    console.log(typeof compiler)
    //参数长度为1，只有一个compiler参数
    console.log(arguments.length)
    /**
     * compiler的事件函数列表：https://www.webpackjs.com/api/compiler-hooks/
     *
     * */
    compiler.plugin("thisCompilation",function(compilation,callback){
      console.log("environment is ready")
      console.log(Object.keys(compilation))
      console.log(compilation.entries)
      // callback()
    })
  }
}
module.exports=Haha