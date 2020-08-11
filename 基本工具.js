arr
1.arrAndSet

并集
/**
 * 数组并集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrAndSet = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
2.arrIntersection

交集
/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrIntersection = (arrOne, arrTwo) => {
  return arrOne.filter(v => arrTwo.includes(v))
}
3.arrDifference

差集
/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * eg: [1, 2, 3] [2, 4, 5] 差集为[1,3,4,5]
 */
export const arrDifference = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo).filter(v => !arrOne.includes(v) || !arrTwo.includes(v))
}
4.arrTwoToArrObj

两个数组合并成一个数组对象
/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arrOne 的值作为 key,arrTwo 作为 value
 * @param {twoKey} twoKey
 */
export const arrTwoToArrObj = (arrOne, arrTwo, oneKey, twoKey) => {
  if(!oneKey&&!twoKey){
    return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
    // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
   // return Object.assign({}, arrOne, arrTwo)
  }else{
    return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
  }
}
5.arrObjSum

数组对象求和
/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrObjSum = (obj, key) => {
  return obj.reduce((prev, cur) => prev + cur.key, 0)
}
6.arrConcat

数组合并
/**
 * 数组合并,目前合并一维
 * @param {Array} arrOne 数组
 * @param {Array} arrTwo 数组
 */
export const arrConcat = (arrOne, arrTwo) => {
  return [...arrOne, ...arrTwo]
}
7.arrSum

数组求和
/**
 * 数组求和
 * @param {Array} arr 数组
 */
export const arrSum = arr => {
  return arr.reduce((prev, cur)=> {
    return prev + cur
  }, 0)
}
8.arrIncludeValue

数组是否包含某值
/**
 * 数组是否包含某值
 * @param {Array} arr 数组
 * @param {}  value 值,目前只支持 String,Number,Boolean
 */
export const arrIncludeValue = (arr,  value) => {
  return arr.includes( value)
}
9.arrMax

数组最大值
/**
 * 数组最大值
 * @param {Array} arr  数组
 */
export const arrMax = arr => {
  return Math.max(...arr)
}
10.arrRemoveRepeat

数组去重
/**
 * 数组去重
 * @param {Array} arr  数组
 */
export const arrRemoveRepeat = arr => {
  return Array.from(new Set(arr))
}
11.arrOrderAscend

数组排序
/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
export const arrOrderAscend = (arr, ascendFlag=true) => {
  return arr.sort((a, b) => {
    return ascendFlag ? a - b : b - a
  })
}
12.arrJudge

判断是否是数组
/**
 * 判断是否是数组
 * @param {Array}} arr 数组
 */
export const arrJudge = arr => Array.isArray(arr)
check

13.checkNum

判断是否是数字
/**
 *  判断是否是数字
 * @param {Number} data
 */
export const checkNum = data => /^\d{1,}$/g.test(data)
14.checkLetter

判断是否是字母
/**
 *  判断是否是字母
 * @param {Number} data
 */
export const checkLetter = data => /^[a-zA-Z]+$/g.test(data)
15.checkLowercaseLetter

判断是否全部是小写字母
/**
 *  判断是否全部是小写字母
 * @param {Number} data
 */
export const checkLowercaseLetter = data => /^[a-z]+$/g.test(data)
16.checkCapitalLetter

判断是否是大写字母
/**
 *  判断是否是大写字母
 * @param {Number} data
 */
export const checkCapitalLetter = data => /^[A-Z]+$/g.test(data)
17.checkNumOrLetter

判断是否是字母或数字
/**
 * 判断是否是字母或数字
 * @param {Number || String} data  字符或数字
 */
export const checkNumOrLetter = data => /^[0-9a-zA-Z]*$/g.test(data)
判断是否是字母和数字的组合
/**
 * 判断是否是字母或数字
 * @param {Number || String} data  字符或数字
 */
export const checkNumAndLetter = data => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/g.test(data)
18.checkChinese

判断是否是中文
/**
 * 判断是否是中文
 * @param {String} data  中文
 */
export const checkChinese = data => /^[\u4E00-\u9FA5]+$/g.test(data)
19.checkChineseNumberLettter

判断是否是中文，数字或字母
export const checkChineseNumberLettter = data => /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g.test(data)
20.checkEmail

判断是否是邮箱地址
/**
 * 判断是否是邮箱地址
 * @param {String} data
 */
export const checkEmail = data => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
  if (reg.test(data)) return true
}
21.checkTelphone

判断是否是手机号
/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} data
 */
export const checkTelphone = data => {
  const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
  if (reg.test(data)) return true
}
22.checkUrl

判断是否是正确的网址
/**
 * 判断是否是正确的网址
 * @param {String} url 网址
 */
export const checkUrl = url => {
  const a = document.createElement('a')
  a.href = url
  return [
    /^(http|https):$/.test(a.protocol),
    a.host,
    a.pathname !== url,
    a.pathname !== `/${url}`
  ].find(x => !x) === undefined
}
client

23.checkBrowser

/**
 * 判断是浏览器内核
 */
export const checkBrowser = () => {
  const u = navigator.userAgent;
  const obj = {
    trident: u.indexOf("Trident") > -1, //IE内核
    presto: u.indexOf("Presto") > -1, //opera内核
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};
24.checkIosAndroidIpad

判断是终端类型,值有ios,android,iPad
/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent;
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
    iPad: u.indexOf("iPad") > -1, //是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};
25.checkWeixinQqUc

判断是否是微信,qq 或 uc
/**
 * 判断是否是微信,qq 或 uc
 */
export const checkWeixinQqUc = () => {

  const u = navigator.userAgent;
  const obj = {
    weixin: u.indexOf("MicroMessenger") > -1, //是否微信
    qq: u.match(/QQ/i) == "qq"&&!u.indexOf('MQQBrowser') > -1, //是否QQ
    uc: u.indexOf('UCBrowser') > -1
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};
26.checkIsIphoneX

检查是否是 IphoneX
/**
 * 检查是否是 IphoneX
 */
export const checkIsIphoneX = () => {
  const u = navigator.userAgent;
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS && screen.height >= 812) {
    return true;
  }
};
file

27.fileFormatSize

格式化文件单位
/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
export const fileFormatSize = size => {
  var i
  var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  for (i = 0; i < unit.length && size >= 1024; i++) {
    size /= 1024
  }
  return (Math.round(size * 100) / 100 || 0) + unit[i]
}
obj

28.objIsEqual

判断两个对象是否相等,目前只支持对象值为简单数据类型的判断
/**
 * 判断两个对象是否相等,目前只支持对象值为简单数据类型的判断
 * @param {Object} oneObj  对象
 * @param {Object} twoObj 对象
 */
export const objIsEqual = (oneObj, twoObj) => {
  const aProps = Object.getOwnPropertyNames(oneObj);
  const bProps = Object.getOwnPropertyNames(twoObj);

        if (aProps.length != bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];
            let propA = oneObj[propName];
            let propB = twoObj[propName];
            if ( propA !== propB) {
                    return false;
            }
        }
        return true;
}
29.objDeepClone

对象深度克隆;
1.JSON.stringify深度克隆对象;
2.无法对函数 、RegExp等特殊对象的克隆;
3.会抛弃对象的constructor,所有的构造函数会指向Object;
4.对象有循环引用,会报错
/**
 * 对象深度克隆,
 * JSON.stringify深度克隆对象
 * 无法对函数 、RegExp等特殊对象的克隆,
 * 会抛弃对象的constructor,所有的构造函数会指向Object
 * 对象有循环引用,会报错
 * @param {Object}  obj 克隆的对象
 */
export const objDeepClone = obj => {
  return clone(obj)
}

const isType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  // 判断数据类型的经典方法：
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case 'Array':
      flag = typeString === '[object Array]';
      break;
    case 'Date':
      flag = typeString === '[object Date]';
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]';
      break;
    default:
      flag = false;
  }
  return flag;
};

/**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = []
  const children = []

  const _clone = parent => {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent

    let child, proto

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = []
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用Object.create切断原型链
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)

    if (index !== -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for (const i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }

    return child
  }
  return _clone(parent)
}
storage

30.localStorageSet

localStorage 存贮
目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
/**
 * localStorage 存贮
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param {String} key  属性
 * @param {Object} value 值
 */
export const localStorageSet = (key, value) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
}
31.localStorageGet

localStorage 获取
/**
 * localStorage 获取
 * @param {String} key  属性
 */
export const localStorageGet = (key) => {
  return localStorage.getItem(key)
}
32.localStorageRemove

localStorage 移除
/**
 * localStorage 移除
 * @param {String} key  属性
 */
export const localStorageRemove = (key) => {
  localStorage.removeItem(key)
}
33.localStorageSetExpire

localStorage 存贮某一段时间失效
/**
 * localStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
  setTimeout(() => {
    localStorage.removeItem(key)
  }, expire)
}
34.sessionStorageSet

sessionStorage 存贮
/**
 * sessionStorage 存贮
 * @param {String} key  属性
 * @param {*} value 值
 */
export const sessionStorageSet = (key, value) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
}
35.sessionStorageGet

sessionStorage 获取
/**
 * sessionStorage 获取
 * @param {String} key  属性
 */
export const sessionStorageGet = (key) => {
  return sessionStorage.getItem(key)
}
36.sessionStorageRemove

sessionStorage 删除
/**
 * sessionStorage 删除
 * @param {String} key  属性
 */
export const sessionStorageRemove = (key, value) => {
  sessionStorage.removeItem(key, value)
}
37.sessionStorageSetExpire

sessionStorage 存贮某一段时间失效
/**
 * sessionStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const sessionStorageSetExpire = (key, value, expire) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
  setTimeout(() => {
    sessionStorage.removeItem(key)
  }, expire)
}
38.cookieSet

cookie 存贮
/**
 * cookie 存贮
 * @param {String} key  属性
 * @param {*} value  值
 * @param String expire  过期时间,单位天
 */
export const cookieSet = (key, value, expire) => {
  const d = new Date()
  d.setDate(d.getDate() + expire)
  document.cookie = `${key}=${value};expires=${d.toGMTString()}`
}
39.cookieGet

cookie 获取
/**
 * cookie 获取
 * @param {String} key  属性
 */
export const cookieGet = (key) => {
  const cookieStr = unescape(document.cookie)
  const arr = cookieStr.split('; ')
  let cookieValue = ''
  for (var i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      cookieValue = temp[1]
      break
    }
  }
  return cookieValue
}
40.cookieRemove

cookie 删除
/**
 * cookie 删除
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}
str

41.strTrimLeftOrRight

去掉字符左右空格
/**
 * 去掉字符左右空格
 * @param {String} str 字符
 */
export const strTrimLeftOrRight = str => {
  return str.replace(/(^\s*)|(\s*$)/g, "")
}
42.strInclude

判断字符是否包含某值
/**
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strInclude = (str, value) => {
  return str.includes(value)
}
43.strBeginWith

判断字符是否以某个字符开头
/**
 * 判断字符是否以某个字符开头
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strBeginWith = (str, value) => {
  return str.indexOf(value) === 0
}
44.strReplace

全局替换某个字符为另一个字符
/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const strReplace = (str, valueOne, valueTwo) => {
  return str.replace(new RegExp(valueOne,'g'), valueTwo)
}
45.strToCapital

将字母全部转化成大写
/**
 * 将字母全部转化成大写
 * @param {String} str 字符
 */
export const strToCapital = (str) => {
  return str.toUpperCase()
}
46.strToLowercase

将字母全部转化成小写
/**
 * 将字母全部转化成小写
 * @param {String} str 字符
 */
export const strToLowercase = (str) => {
  return str.toLowerCase()
}
47.strToCapitalLetter

将字母全部转化成以大写开头
/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const strToCapitalLetter = (str) => {
  const strOne = str.toLowerCase()
  return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}
thrDeb

48.throttle

节流
/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = function(func, delay) {
  let timer = null
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        // 或者直接 func()
        timer = null
      }, delay)
    }
  }
}
49.debounce

防抖
/**
 * 防抖
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间,毫秒
 */
export const debounce = function(fn, wait) {
  let timeout = null
  return function() {
    if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      // 或者直接 fn()
      timeout = null
    }, wait)
  }
}
time

50.getYear

获取年份
/**
 * 获取年份
 */
export const getYear = () => {
  return new Date().getFullYear()
}
51.getMonth

获取月份
/**
 * 获取当前月份
 * @param {Boolean} fillFlag 布尔值,是否补 0,默认为 true
 */
export const getMonth = (fillFlag=true) => {
  const mon = new Date().getMonth() + 1
  const monRe = mon
  if (fillFlag) mon < 10 ? `0${mon}` : mon
  return monRe
}
52.getDay

获取日
/**
 * 获取日
 * @param {Boolean} fillFlag 布尔值,是否补 0
 */
export const getDay = (fillFlag=true) => {
  const day = new Date().getDate()
  const dayRe = day
  if (fillFlag) day < 10 ? `0${day}` : day
  return dayRe
}
53.getWhatDay

星期几
/**
 * 获取星期几
 */
export const getWhatDay = () => {
  return new Date().getDay() ? new Date().getDay() : 7
}
54.getMonthNum

获取当前月天数
/**
 * 获取当前月天数
 * @param {String} year 年份
 * @param {String} month 月份
 */
export const getMonthNum = (year, month) => {
  var d = new Date(year, month, 0)
  return d.getDate()
}
55.getYyMmDdHhMmSs

获取当前时间 yyyy-mm-dd,hh:mm:ss
/**
 * 获取当前时间 yyyy-mm-dd,hh:mm:ss
 */
export const getYyMmDdHhMmSs = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minu = date.getMinutes()
  const second = date.getSeconds()
  const arr = [month, day, hours, minu, second]
  arr.forEach((item,index) => {
    arr[index]=item < 10 ? '0' + item : item
  })
  return (
    year +
    '-' +
    arr[0] +
    '-' +
    arr[1] +
    ' ' +
    arr[2] +
    ':' +
    arr[3] +
    ':' +
    arr[4]
  )
}
56.timesToYyMmDd

时间戳转化为年月日
/**
 * 时间戳转化为年月日
 * @param times 时间戳
 * @param ymd 格式类型(yyyy-mm-dd,yyyy/mm/dd)
 * @param hms 可选,格式类型(hh,hh:mm,hh:mm:ss)
 * @returns {年月日}
 */
export const timesToYyMmDd = (times, ymd,  hms) => {
  const oDate = new Date(times)
  const oYear = oDate.getFullYear()
  const oMonth = oDate.getMonth() + 1
  const oDay = oDate.getDate()
  const oHour = oDate.getHours()
  const oMin = oDate.getMinutes()
  const oSec = oDate.getSeconds()
  let oTime // 最后拼接时间
  // 年月日格式
  switch (ymd) {
    case 'yyyy-mm-dd':
      oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
      break
    case 'yyyy/mm/dd':
      oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay)
      break
  }
  // 时分秒格式
  switch (hms) {
    case 'hh':
      oTime = ' '+oTime + getzf(oHour)
      break
    case 'hh:mm':
      oTime = oTime + getzf(oHour) + ':' + getzf(oMin)
      break
    case 'hh:mm:ss':
      oTime = oTime + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSec)
      break
  }
  return oTime
}
57.YyMmDdToTimes

将年月日转化成时间戳
/**
 * 将年月日转化成时间戳
 * @param {String} time yyyy/mm/dd 或yyyy-mm-dd 或yyyy-mm-dd hh:mm 或yyyy-mm-dd hh:mm:ss
 */
export const YyMmDdToTimes = (time) => {
  return new Date(time.replace(/-/g, '/')).getTime()
}
58.compareTimeOneLessTwo

/**
 *  比较时间 1 小于时间 2
 * @param {String} timeOne  时间 1
 * @param {String} timeTwo  时间 2
 */
export const compareTimeOneLessTwo = (timeOne, timeTwo) => {
  // 判断 timeOne 和 timeTwo 是否
  return new Date(timeOne.replace(/-/g, '/')).getTime()<new Date(timeTwo.replace(/-/g, '/')).getTime()
}
url

59.getQueryString

获取 url 后面通过?传参的参数~~~~
/**
 *  获取 url 后面通过?传参的参数
 * @param {String} name
 */
export function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const url = window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const r = search.match(reg)
  if (r != null) return unescape(r[2])
  return null
}