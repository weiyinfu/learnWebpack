const {getOptions} = require('loader-utils');
const validateOptions = require('schema-utils');
const childProcess = require("child_process")
const fs = require("fs")
const path = require("path");
const schema = {
  type: 'object',
  properties: {
    pretty: {
      type: "boolean"
    }
  }
}

module.exports = function (source) {
  //注意，不要导出闭包，而要导出函数，webpack的全部配置都在arguments的callee里面
  const options = getOptions(this);
  validateOptions(schema, options, 'Example Loader');
  console.log(this)
  console.log("==========以上是webpack的内容")
  console.log(source)
  console.log("===============以上是Python源代码")
  console.log(options)
  console.log("=============以上是选项，选项是从this里面提取出来的")
  const filename = `${Math.floor(Math.random() * 1000)}.py`
  const filepath = path.join("dist", filename);
  fs.writeFileSync(filepath, source)
  console.log("pyton file path " + filepath)
  let resp = childProcess.execSync('python3 ' + filepath)
  fs.unlinkSync(filepath);
  resp = resp.toString("utf8");
  console.log(resp)
  console.log("=======以上是response")
  return "module.exports=" + resp;
};