/**
 * 时间跳动函数
 * @param {list} node ul时间列表
 * @param {number} delay 定时器间隔时间
 */

function timeNumberChange(node, delay) {
  setInterval(function () {
    // 获得第一个子节点li
    var firstNode = node.querySelector("li");
    //给ul添加动画属性transition
    node.style.transition = "all 0.5s linear";
    //调整列表ul的高度
    node.style.marginTop = "-120px";

    //动画执行完触发的事件
    node.addEventListener("transitionend", function () {
      // 改变动画属性transition，为空
      node.style.transition = "none";
      // 调整高度
      node.style.marginTop = 0;
      // 追加第一个子节点（存在就调整到最后）
      node.appendChild(firstNode);
    });
  }, delay);
}

//获得所以的时间数字容器
var timeNumbers = document.querySelectorAll(".time-item");

// 秒的个位
timeNumberChange(timeNumbers[5].querySelector("ul"), 1000);
// 秒的十位
timeNumberChange(timeNumbers[4].querySelector("ul"), 10000);
// 分的个位
timeNumberChange(timeNumbers[3].querySelector("ul"), 60000);
// 分的十位
timeNumberChange(timeNumbers[2].querySelector("ul"), 600000);
// 时的个位
timeNumberChange(timeNumbers[1].querySelector("ul"), 3600000);
// 时的十位
timeNumberChange(timeNumbers[0].querySelector("ul"), 10800000);
