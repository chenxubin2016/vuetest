/**
 *格式化数据
 *
 * @param {*} data
 * @returns
 */
function formatParam(data) {
  var _data = data;
  var req = new Object();
  req.para = JSON.stringify(data);
  return req;
}
export default{
  formatParam:formatParam
}