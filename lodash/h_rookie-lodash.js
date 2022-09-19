var h_rookie = function () {

  function indexOf(ary, target, fromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] === target) {
        return i
      }
    }

    return -1
  }

  function lastIndexOf(ary, target, fromIndex = ary.length - 1) {
    for (var i = fromIndex; i > 0; i--) {
      if (ary[i] === target) {
        return i
      }
    }

    return -1
  }

  function chunk(array, size = 1) {

    var result = []
    var per = []
    for (var i = 0; i < array.length; i++) {
      per.push(array[i])

      if (per.length === size) {
        result.push(per)
        per = []
      }
    }

    if (per.length !== 0) {  //处理最后一次，有可能不是整数倍，就不会push到result中
      result.push(per)
    }
    return result
  }

  function compact(array) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (item !== item) { //NaN要单独判断，不然任意数都返回假
        continue
      }
      if (item != false && item != undefined) {  // ==false 的有0，false,''
        newAry.push(item)
      }
    }
    return newAry
  }

  function fill(array, value, start = 0, end = array.length) {

    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }


  function drop(array, n = 1) {
    return array.slice(n)
  }


  function findIndex(array, predicate, start = 0) {

    for (var i = start; i < array.length; i++) {
      var p = array[i]
      var judgeType = judge(predicate)
      if (judgeType(p)) {
        return i
      }
    }

    return -1
  }

  function findLastIndex(array, predicate, start = array.length - 1) {

    for (var i = start; i >= 0; i--) {
      var p = array[i]
      var judgeType = judge(predicate)
      if (judgeType(p)) {
        return i
      }
    }

    return -1
  }

  function judge(predicate) {   //判断predicate的类型，并与p进行对比，如果p包含predicate，则返回i

    if (typeof predicate === 'function') {//如果是函数，就返回这个函数
      return predicate
    } else if (typeof predicate === 'object') {
      if (Array.isArray(predicate)) {//数组，返回一个函数，判断obj里的键值对能不能对应上数组的值
        return function (obj) {
          return obj[predicate[0]] === predicate[1]
        }
      } else {
        return function (obj) {//对象，返回一个函数，判断obj里有没有包含predicate中的所有键值对

          for (var key in predicate) {
            if (predicate[key] !== obj[key]) {  // 读不到的属性也会是undefined，不需要另外写一个if
              return false
            }
            // if (!(key in obj)) {
            //   return false
            // }
          }

          return true
        }
      }
    } else if (typeof predicate === 'string') {
      return function (obj) {
        return obj[predicate] === true
      }
    }
  }

  function flatten(array) {
    if (array.length === 0) {
      return []
    }

    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        for (var j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDeep(array) {
    if (array.length === 0) {
      return []
    }
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        result = result.concat(flattenDeep(item))
      } else {
        result = result.concat(item)
      }
    }
    return result
  }


  function flattenDepth(array, depth = 1) {
    if (array.length === 0) {
      return []
    }

    if (depth === 0) {
      return array
    }

    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        var items = flattenDepth(item, depth - 1)
        for (var j = 0; j < items.length; j++) {
          result.push(items[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }


  function fromPairs(array) {
    var result = {}

    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      result[item[0]] = item[1]
    }

    return result
  }


  function fromPairs(array) {
    var flatArr = flattenDeep(array)

    var result = {}
    for (var i = 0; i < flatArr.length; i += 2) {
      result[flatArr[i]] = flatArr[i + 1]
    }

    return result
  }

  function head(array) {
    return array[0]
  }

  function initial(array) {
    return array.slice(0, array.length - 1)
  }

  function join(array, separator = ',') {

    var str = ''
    for (var i = 0; i < array.length; i++) {
      str += array[i]
      if (i !== array.length - 1) {
        str += separator
      }
    }
    return str
  }

  function last(array) {
    return array[array.length - 1]
  }

  //复杂质数***
  function pull(array, ...a) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (a.includes(item)) {
        array.splice(i, 1)
        i = 0
      }
    }
    return array
  }

  function reverse(array) {
    var i = 0
    var j = array.length - 1

    while (i < j) {
      var t = array[i]
      array[i] = array[j]
      array[j] = t
      i++
      j--
    }
    return array
  }


  function every(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      var judgeType = judge(predicate)
      if (!judgeType(item)) {
        return false
      }
    }
    return true
  }

  function some(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      var judgeType = judge(predicate)
      if (judgeType(item)) {
        return true
      }
    }
    return false
  }

  function judge(predicate) {   //判断predicate的类型，并与p进行对比，如果p包含predicate，则返回i

    if (typeof predicate === 'function') {//如果是函数，就返回这个函数
      return predicate
    } else if (typeof predicate === 'object') {
      if (Array.isArray(predicate)) {//数组，返回一个函数，判断obj里的键值对能不能对应上数组的值
        return function (obj) {
          return obj[predicate[0]] === predicate[1]
        }
      } else {
        return function (obj) {//对象，返回一个函数，判断obj里有没有包含predicate中的所有键值对

          for (var key in predicate) {
            if (predicate[key] !== obj[key]) {  // 读不到的属性也会是undefined，不需要另外写一个if
              return false
            }
            // if (!(key in obj)) {
            //   return false
            // }
          }

          return true
        }
      }
    } else if (typeof predicate === 'string') {
      return function (obj) {
        return obj[predicate] === true
      }
    }
  }


  function countBy(array, classify) {
    var result = {}

    array.forEach(it => {
      if (typeof classify == 'function') {
        var propName = classify(it)
        if (!(propName in result)) {
          result[propName] = 0
        }
        result[propName]++
      } else if (typeof classify == 'string') {
        var propName = it[classify]
        if (!(propName in result)) {
          result[propName] = 0
        }
        result[propName]++
      }
    })

    return result
  }

  function groupBy(array, classify) {
    var result = {}

    array.forEach(it => {
      if (typeof classify == 'function') {
        var propName = classify(it)
        if (!(propName in result)) {
          result[propName] = []
        }
        result[propName].push(it)
      } else if (typeof classify == 'string') {
        var propName = it[classify]
        if (!(propName in result)) {
          result[propName] = []
        }
        result[propName].push(it)
      }
    })

    return result
  }

  function keyBy(array, predicate) {
    array.forEach(it => {
      
    })
  }




  return {
    indexOf,
    lastIndexOf,
    chunk,
    drop,
    compact,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    initial,
    join,
    last,
    reverse,
    judge,
    every,
    some,
    countBy,
    groupBy,
    keyBy,


    pull,
  }
}()
