/*
 * @Author: iceStone
 * @Date:   2016-02-19 16:28:59
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-02-19 16:30:37
 */
/**
 * 转换模块，导出成员：convertToNumber
 */
define(function(require, exports, module) {
  // 公开一些转换逻辑
  exports.convertToNumber = function(input) {
    return parseFloat(input);
  }
});
