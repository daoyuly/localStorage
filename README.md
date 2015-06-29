存储：C:\Users\liudaoyu\AppData\Local\Google\Chrome\User Data\Default\Local Storage

格式：sqlite3 

可以使用使用记事本打开，查看里面的内容。

也可以是使用sqlite相关工具查看。

没有加密，明文存储

localstorage的命名格式：协议_网站域名_端口号（默认0）.localstorage




大文件存储的内容：字体文件，js，css，html模板，图片（canvas转换成 url data）
Tieba-分享组件，性能统计，流量统计文件

更新相关：时间戳：包含在键值里，在文件内容里。

性能：sqlite3的性能在不断提升
Demo: setItem 100次，平均耗时：1.5ms

最大容量在10M左右


读取速度不受localstorage的大小的约束。





Sqlite3的文件格式参看这里
http://download.csdn.net/download/www_www123/5924335

在本地存储localStorage中保存图片和文件
http://www.tuicool.com/articles/fiYJry