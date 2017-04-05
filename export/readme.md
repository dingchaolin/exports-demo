##exports 和 module.exports 区别

- require 返回的是 module.exports 这个对象
- exports 指向 module.exports 的 引用
- exports.attr = ... 这样不会改变exports的指向，只是添加了一个属性而已

- 如果是 exports = {  }
- 这样会改变exports的指向
- 导致require返回的时候 会返回一个{}

- module.exports = exports;
- 这一行代码能够将exports对象赋值给module.exports
- require就能正常返回了
