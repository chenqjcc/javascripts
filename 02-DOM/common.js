function getInnerText(params) {
  
}

// 设置元素之间的内容
function setInnerText(element,content) {
  // 判断是否支持innertext
  if (typeof element.innerText === 'string') {
    element.innerText = content;
  } else {
    element.innerContent = content;
  }
}


// 获取min---max之间的随机值
function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * ( max - min + 1)) + min;
}

// 根据id获取元素
function my$(id) {
  return document.getElementById(id);
}