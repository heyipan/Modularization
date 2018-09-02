/*
 * @Author: iceStone
 * @Date:   2016-02-19 17:12:42
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-02-19 17:19:17
 */

'use strict';

define(function(require, exports, module) {
  // 想用jquery怎么办
  var $ = require('./jquery.js');
  console.log($);
  $(document.body).css('backgroundColor', 'red');
});
