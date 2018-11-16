/**
 * Created by Administrator on 2018/9/25.
 */
/**
 * 通过类名获取元素
 * @param parentNode 父元素
 * @param className 类名
 * @returns {*} 父元素里面的所有类名为className的元素
 */
function getEleByClassName(parentNode, className) {
    if (parentNode.getElementsByClassName) {
        // IE9+
        return parentNode.getElementsByClassName(className);
    } else {
        // IE9一下
        // 只能获取全部然后筛选
//            var allList = parentNode.children;
        // 代表选中parentNode 里面的所有的标签
        var allList = parentNode.getElementsByTagName('*');
        var arr = [];
        for (var i = 0; i < allList.length; i++) {
            var ele = allList[i];
            if (ele.className == className) {
                arr.push(ele);
            }
        }
        return arr;
    }
}
/**
 * 通过选择器获取元素
 * @param selector 选择器
 * @returns {*} 获取到的元素
 */
function $(selector) {
    var list = document.querySelectorAll(selector);
    if (list.length == 1){
        return list[0];
    }
    var arr = [];
    for ( var i = 0; i<list.length; i++) {
        var li = list[i];
        arr.push(li);
    }
    return arr;
}
/**
 * 通过id名称获取标签
 * @param id
 * @returns {Element} 获取到的标签
 */
function $id(id) {
    return document.getElementById(id);
}
/**
 * 遍历
 * @param list 要遍历的数组/伪数组
 * @param callback 回调函数
 */
function each(list,callback) {
    for ( var i = 0; i<list.length; i++) {
        var li = list[i];
        callback(li,i,list);
    }
}
/**
 * 获取滚动距离
 */
function scroll() {
    if (window.pageXOffset || window.pageYOffset){
        // IE9 + 以及最新的浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    }else if (document.documentElement.scrollTop || document.documentElement.scrollLeft){
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    }else {
        return {
            // IE 6 以及下 怪异模式
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        };
    }
}
/**
 * 获取网页的可视区域的宽度和高度
 */
function client() {
    if (window.innerWidth || window.innerHeight){
        return {
            width:window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.documentElement.clientWidth || document.documentElement.clientHeight){
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }else {
        // 怪异模式
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}
/**
 * 匀速动画
 * @param obj 要做匀速动画的标签
 * @param speed 速度
 * @param target 目标值
 */
function linear(obj,speed,target) {
    clearInterval(obj.timer);
    var offsetX = obj.offsetLeft;

    var dir = speed;
    // 判断方向
    if (offsetX <= target){
        // 向右走
        dir = speed;
    }else {
        // 向左走
        dir = -speed;
    }
    obj.timer = setInterval(function () {
        offsetX += dir;
        if (Math.abs(target - offsetX) <= speed){
            // 清空定时器
            clearInterval(obj.timer);
            offsetX = target;
        }
        obj.style.left = offsetX + 'px';
    },20);
}
/**
 * 缓动动画
 * @param obj 要做动画的标签
 * @param data 动画的数据
 * @param callback 回调函数
 */
function buffer(obj,data,callback) {
    // 让盒子做缓动动画
    clearInterval(obj.timer);
    // 动态获取盒子的属性
    obj.timer = setInterval(function () {
        // 定义标志
        // 当所有的值都到达目标值 就为true
        // 如果有一个值没有到达目标值就为false
        var flag = true;
        for(var key in data){
            var beginx = parseFloat(getStyleAttr(obj,key)) || 0;
            var endx = data[key];
            // 速度
            var speed = (endx - beginx) / 10;
            // 向右走 向上取整
            // 向左走 向下取整
            if (beginx <= endx){
                // 向右走
                speed = Math.ceil(speed);
            }else {
                speed = Math.floor(speed);
            }

            beginx = beginx + speed;
            console.log(speed,beginx);

            // 清空定时器
            // 有一个值到达目标值就清空定时器 这样不能保证所有的值都到达目标值
            // 需求 保证所有的值都到达目标值就清空定时器
            if (beginx == endx){
//                    clearInterval(obj.timer);
                // 设置目标值
                beginx = endx;
            }else {
                // 没有到达目标值
                flag = false;
            }
            obj.style[key] = beginx + 'px';
        }
        if (flag){
            clearInterval(obj.timer);
            // 动画做完
            if (callback) callback();

//                callback && callback();
        }
    },20);
}
// 获取标签的样式的值
function getStyleAttr(obj, attr) {
    if(obj.currentStyle){ // IE 和 opera
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj, null)[attr];
    }
}