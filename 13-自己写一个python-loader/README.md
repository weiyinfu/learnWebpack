loader和plugin和webpack的主要可定制机制。  
此例用于演示loader的写法。  

# python-loader
使用Python生成JSON数据，当Python代码发生改变的时候，js会相应的进行刷新。  

先运行webpack，然后运行node dist/index.js，会发现输出的结果正是Python的运行结果。  

这个机制表明：以后可以用Python生成静态数据给JS调用。  

# python-wrapper-loader
webpack的本质就是字符串处理，而Python显然是字符串处理的首选语言。  
与其使用js写loader，不如使用python写loader。  
用js把python包起来作为loader，因为webpack本身是基于nodejs，所以最外层的loader必须是js。而内层的loader就比较随意了。  
此例使用python实现了markdown转html。

# python和js的跨语言通信
因为webpack涉及到的情景比较简单，只需要只需要通过文件进行参数传递即可。  