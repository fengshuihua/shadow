/**
 * 获取网页可视区域的宽度和高度
 */
function client() {
  if (window.innerWidth || window.innerHeight) {
    return {
        width:window.innerWidth,
        height: window.innerHeight
    }
  }else if (document.compatMode == 'CSS1compat'){
    // 标准
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
  }else {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
  }
}
