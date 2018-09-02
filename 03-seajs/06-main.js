/*
 * @Author: iceStone
 * @Date:   2016-02-19 17:38:48
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-02-19 18:02:08
 */

define(function(require, exports, module) {
  var Pagination = require('./modules/pagination.js');
  var pager = new Pagination(1, 20, 7);
  pager.render('.pagination');
  pager.render('.pagination1');
});
