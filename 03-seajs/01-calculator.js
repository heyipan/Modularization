/*
 * @Author: iceStone
 * @Date:   2016-02-19 16:09:08
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-02-19 16:32:14
 */

// 定义一个模块，遵循Seajs的写法  calculator.js
define(function(require, exports, module) {
  // 此处是模块的私有空间
  // 定义模块的私有成员
  // 载入01-convertor模块
  var convertor = require('./01-convertor.js');

  function add(a, b) {
    return convertor.convertToNumber(a) + convertor.convertToNumber(b);
  }

  function subtract(a, b) {
    return convertor.convertToNumber(a) - convertor.convertToNumber(b);
  }

  function multiply(a, b) {
    return convertor.convertToNumber(a) * convertor.convertToNumber(b);
  }

  function divide(a, b) {
    return convertor.convertToNumber(a) / convertor.convertToNumber(b);
  }
  // 暴露模块的公共成员
  exports.add = add;
  exports.subtract = subtract;
  exports.multiply = multiply;
  exports.divide = divide;
});
