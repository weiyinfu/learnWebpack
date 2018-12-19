var img1 = document.createElement("img");
//使用url-loader将文件转换为url
img1.src = require("./small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
document.body.appendChild(img2);
