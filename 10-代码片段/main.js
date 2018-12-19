//这种方式会发起一次网络请求
require.ensure(['./a'], function(require) {
  var content = require('./a'); 
  document.body.innerHTML+='<h1>' + content + '</h1>'; 
});
//这种方式直接合并代码
document.body.innerHTML+=("<h2>"+require("./b")+"</h2>")
