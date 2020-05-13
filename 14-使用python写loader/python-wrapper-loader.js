const {getOptions} = require('loader-utils');
const childProcess = require("child_process")
const fs = require("fs")
const path = require("path");
module.exports = function (source) {
  //注意，不要导出闭包，而要导出函数，webpack的全部配置都在arguments的callee里面
  const options = getOptions(this);
  const pyfilepath = options.filepath;
  const pyfilename = path.basename(pyfilepath);
  const inputfilepath = path.join("dist", pyfilename + ".input.txt");
  const optionfilepath = path.join("dist", pyfilename + ".option.json");
  fs.writeFileSync(inputfilepath, source);
  fs.writeFileSync(optionfilepath, JSON.stringify(options));
  const stdout=childProcess.execSync(`python3 "${pyfilepath}"  "${inputfilepath}"  "${optionfilepath}"` ,{encoding:'utf8'});
  console.log(stdout)
  const resp=fs.readFileSync(inputfilepath).toString("utf8");
  fs.unlinkSync(inputfilepath);
  fs.unlinkSync(optionfilepath);
  return resp;
};