原仓库地址：github.com/ruanyf/webpack-demos 前端技术更新太快，许多旧代码都已经跑步起来了。本repo基于最新的库，重新跑通一遍例子，并对例子的顺序进行调整，添加了部分例子。 

单纯看代码实例不够系统，可以和webpack官方文档配合查看。webpack中文文档：https://www.webpackjs.com/

本仓库包含了webpack的基本用法示例，运行非常简单，全部跑通一遍，必然能够完全掌握webpack。前端技术百花齐放，百家争鸣，webpack是学习前端的绝佳入口，可以引出许多技术。

# 概念梳理
## node
js是一种语言，DOM、BOM并不是语言的一部分，而是执行环境提供的组件。  
js是一种脚本语言，需要解释器一步一步执行。node是谷歌推出的js执行引擎，它只处理js语言而不管DOM、BOM之类和Web相关的东西。node之于js，犹如python命令之于python代码。  

## js的编译器
编译器，就是把一种源语言翻译成一种目标语言。  
js之上人们提出typescript，babel，coffescript，jsx等语言，这些语言可以用相应的编译器翻译成js语言。类似的，css有less，sass，stylus等语言，使用对应的编译器可以把它们翻译成css。html有jade语言，使用jade编译器可以把jade代码变成html代码。    
编译器和执行器是两个概念。c++语言只需要编译器不需要执行器，因为c++编译之后的目标代码就可以直接被计算机理解，不需要执行器解释执行。java语言既需要编译器把java源码编译成中间代码class文件，有需要执行器jvm来解释执行class文件。  
java-class-jvm  
typescript-js-node  

## npm
npm是node package management，npm是node的包管理工具。
npm之于js，犹如maven之于java，犹如pip之于python，犹如make之于c++，它就是一个包管理工具。npm的包管理模式有全局、局部两种，全局模式安装的包是全局共享的，局部模式安装的包只有当前项目能够看到。全局模式的优点在于：便于统一管理，节省空间；局部模式的优点在于：便于对包修改源码，更加灵活，同时部署更为简易。maven中只有全局模式。  
就像maven总是查看pom.xml一样，npm命令总是查看package.json文件，在package.json文件中可以定义许多诸如命令行、依赖等各种项目。  
npm的竞品主要是yarn。  

## webpack
webpack是什么？webpack是基于node编写的一套命令行工具，主要用途就是对源代码进行预处理操作。简言之，webpack用于管理编译过程。

webpack本身就是一个包。所以需要先安装webpack。
```shell
npm install -g webpack
npm install -g webpack-cli
npm install -g webpack-dev-server
```
webpack是核心部分，webpack-cli和webpack-dev-server提供了一些外围功能。webpack-dev-server等价于webpack+http-server（http-server是一个静态服务器，可以通过npm install -g http-server进行安装），webpack命令执行打包操作，http-server启动一个静态服务器。  
webpack有许多竞品：Grunt、Gulp、Browserify。这些竞品完全不是webpack的对手，可以忽略之。  
就像npm命令总是查看package.json，就像maven总是查看pom.xml，webpack总是根据当前目录下的webpack.config.js来执行操作。

# 本repo使用方法
在本repo中，一律使用全局模式安装包。  
cd到每个实例的目录下，使用webpack-dev-server命令直接启动，根据输出的ip端口号，打开浏览器查看效果即可。  
例如：
```bash
$ cd demo01
$ webpack-dev-server
```
也可以一步一步来，先运行webpack命令，然后运行http-server打开浏览器查看效果。webpack命令会自动解析当前目录下的webpack.config.js。

# 01-entry
webpack中有两个重要概念：entry和output。  
entry表示输入文件，output表示输出文件，整个构建过程形成一个有向无环图（DAG）。  
entry和output的指定方式都很灵活，不着急一下全知道，一步一步往下看。 

本实例输入一个main.js，输出一个bundle.js。  
bundle.js会默认生成到dist目录，可以看见index.html中的bundle.js没有带dist/，这表明webpack-dev-server是自动默认去dist中加载静态资源的。

# 02-多个entry
01中只有一个输入entry，entry的类型直接是一个字符串；02中有2个输入entry，这时entry的类型变成了字典。output中使用“[name].js”来指明目标文件的名字，[name]相当于entry中的key。

# 03-多个entry生成一个文件
本例将main1.js和main2.js打包成一个bundle.js
entry的三种类型已经学全了，entry可以是：
* 列表，必然是只有一个输入结点，但是这个输入结点包含“一大捆”文件
* 字典，当为字典时，value也可以是列表，如{bundle1:[file1.js,file2.js]}
* 字符串，必然是只有一个输入文件

输出时，每一捆entry都对应一个output的filename。

# 04-多个entry大乱斗
entry可以是一个字典，字典中的value是一个文件列表。

# 05-使用url-loader转换图片
本实例通过正则表达式的方法把图片转换为字符串。本实例用到了url-loader这个包，所以需要在全局中安装：`npm install -g url-loader ; npm install -g file-loader`。
file-loader用于读取图片文件数据，url-loader用于把图片src插入到html中。

安装完要想让当前代码能够找到这个包，还需要设置`NODE_PATH`环境变量，`NODE_PATH`的作用和`JAVA_PATH`一样，都提供一些公共的包。需要注意，设置完之后，重启控制台环境变量才能生效。
webpack可能依旧找不到url-loader，这是使用require.resolve('url-loader')+"?limit=8192" 就可以了。这种方法实在不够美观，可以直接通过软连接的形式把node_modules引入到当前路径下。
windows下：`mklink /j node_modules ~/AppData/Roaming/npm/node_modules`  

在webpack.config.js中，`url-loader?limit=8192`表示当图片大小小于8k时，使用base64打包，否则使用原图片。本例给出了一大一小两张图片，它们在html中的效果如下：
```html
<img src="data:image/png;base64,iVBOR...uQmCC">
<img src="4853ca667a2b8b8844eb2693ac1b2578.png">
```

# 06-使用style-loader转换css
本实例需要安装style-loader和css-loader。
css-loader用于读取css文件，style-loader用于把css内容插入到html中。

# 07-使用jsx-loader转换jsx
本实例需要安装jsx-loader，react，react-dom三个包

# 08-综合使用css和jsx
本实例把css-loader和jsx-loader结合起来使用，所需要的包在前几步已经安装好了。

# 09-使用uglify插件
插件和loader是webpack的两大主题。  
首先在全局中安装uglifyjs插件：`npm install -g uglifyjs-webpack-plugin`  
uglifyjs是一个很著名的库，我们也可以单独安装这个库：`npm install -g uglify-js`。安装完成之后，就可以使用uglifyjs命令来“弄乱”js了。

uglify插件的详细用法参考：https://www.webpackjs.com/plugins/uglifyjs-webpack-plugin/#uglifyoptions

webpack插件丰富多彩，但是大部分都是可有可无的，作用仅仅是锦上添花，即便完全不了解插件也是没有任何影响的。更多插件请参考官方文档。

# 10-代码片段
webpack的重要作用就是打包。比如两个页面共用相同的header和footer，我们就可以使用require("header.js"),require("footer.js")直接把相同的部分引入进来。
